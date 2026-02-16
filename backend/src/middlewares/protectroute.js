import { clerkClient, requireAuth } from "@clerk/express";
import User from "../models/user.model.js";

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      const clerkId = req.auth().userId;
      if (!clerkId) {
        console.log("❌ protectRoute: No Clerk ID found in request.");
        return res.status(401).json({ mess: "Invalid token " });
      }

      // find user in db by clerkId
      // console.log(`🔍 protectRoute: Checking DB for ClerkID: ${clerkId}`);
      const user = await User.findOne({ clerkId });

      if (!user) {
        console.log("❌ protectRoute: User NOT found in DB. Starting Lazy Sync...");

        // Lazy Sync: Valid Clerk User but not in DB (e.g. fresh local DB)
        try {
          console.log("🔄 protectRoute: Fetching user details from Clerk...");
          const clerkUser = await clerkClient.users.getUser(clerkId);

          if (!clerkUser) {
            console.error("❌ protectRoute: User not found in Clerk API.");
            return res.status(404).json({ mess: "User not found in Clerk" });
          }
          console.log("✅ protectRoute: User fetched from Clerk:", clerkUser.emailAddresses[0]?.emailAddress);

          const email = clerkUser.emailAddresses[0]?.emailAddress || "";

          // Check if user exists by email (to avoid duplicate key error)
          let dbUser = await User.findOne({ email });

          if (dbUser) {
            console.log(`⚠️ protectRoute: User found by email (${email}) but ClerkID mismatch. Updating...`);
            dbUser.clerkId = clerkId; // Update ClerkID to match current session
            // Update other fields if needed
            dbUser.name = `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim() || dbUser.name;
            dbUser.profileImage = clerkUser.imageUrl || dbUser.profileImage;
            await dbUser.save();
          } else {
            console.log("🆕 protectRoute: Creating NEW user in MongoDB...");
            // Create new user
            const newUser = {
              clerkId: clerkId,
              name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim() || "User",
              email: email,
              profileImage: clerkUser.imageUrl || "",
            };
            dbUser = await User.create(newUser);
            console.log("✅ protectRoute: User successfully created in DB:", dbUser._id);
          }

          // CRITICAL: Ensure user is synced to Stream (fixes "don't exist" error)
          // valid Stream ID must be string
          try {
            console.log("🔄 protectRoute: Syncing with Stream...");
            const { upsertStreamUser } = await import("../libs/stream.js");
            await upsertStreamUser({
              id: dbUser.clerkId.toString(),
              name: dbUser.name,
              image: dbUser.profileImage
            });
            console.log("✅ protectRoute: Stream sync complete.");
          } catch (streamErr) {
            console.error("❌ protectRoute: Stream sync failed (non-fatal):", streamErr.message);
            // Proceed anyway since DB sync worked
          }

          req.user = dbUser;
          next();
        } catch (syncError) {
          console.error("❌ protectRoute: FATAL Lazy Sync Error:", syncError.message, syncError);
          return res.status(500).json({ mess: "User sync failed" });
        }
      } else {
        // console.log("✅ protectRoute: User found in DB.");
        req.user = user;
        next();
      }
    } catch (err) {
      console.error("❌ protectRoute: Internal Middleware Error:", err.message);
      res.status(500).json({ mess: "Internal server error" });
    }
  },
];
