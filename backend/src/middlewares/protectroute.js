import { clerkClient, requireAuth } from "@clerk/express";
import User from "../models/user.model.js";

export const protectRoute = [
  requireAuth({ signInUrl: "/sign-in" }),
  async (req, res, next) => {
    try {
      const clerkId = req.auth().userId;
      if (!clerkId) {
        return res.status(401).json({ mess: "Invalid token " });
      }
      // find user in db by clerkId
      const user = await User.findOne({ clerkId });
      if (!user) {
        console.log("❌ User not found in DB. ClerkID:", clerkId);
        // Lazy Sync: Valid Clerk User but not in DB (e.g. fresh local DB)
        try {
          console.log("🔄 Attempting lazy sync from Clerk...");
          const clerkUser = await clerkClient.users.getUser(clerkId);

          if (!clerkUser) {
            return res.status(404).json({ mess: "User not found in Clerk" });
          }

          const email = clerkUser.emailAddresses[0]?.emailAddress || "";

          // Check if user exists by email (to avoid duplicate key error)
          let dbUser = await User.findOne({ email });

          if (dbUser) {
            console.log(`⚠️ User found by email (${email}) but ClerkID mismatch. Updating ClerkID...`);
            dbUser.clerkId = clerkId; // Update ClerkID to match current session
            // Update other fields if needed
            dbUser.name = `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim() || dbUser.name;
            dbUser.profileImage = clerkUser.imageUrl || dbUser.profileImage;
            await dbUser.save();
          } else {
            // Create new user
            const newUser = {
              clerkId: clerkId,
              name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim() || "User",
              email: email,
              profileImage: clerkUser.imageUrl || "",
            };
            dbUser = await User.create(newUser);
            console.log("✅ Lazy sync successful. User created:", dbUser.email);
          }

          // CRITICAL: Ensure user is synced to Stream (fixes "don't exist" error)
          // valid Stream ID must be string
          try {
            const { upsertStreamUser } = await import("../libs/stream.js");
            await upsertStreamUser({
              id: dbUser.clerkId.toString(),
              name: dbUser.name,
              image: dbUser.profileImage
            });
          } catch (streamErr) {
            console.error("❌ Failed to sync to stream in protectRoute:", streamErr);
            // Proceed anyway since DB sync worked
          }

          req.user = dbUser;
          next();
        } catch (syncError) {
          console.error("❌ Lazy sync failed:", syncError);
          return res.status(500).json({ mess: "User sync failed" });
        }
      } else {
        req.user = user;
        next();
      }
    } catch (err) {
      console.error("error in protectroute middleware", err);
      res.status(500).json({ mess: "Internal server error" });
    }
  },
];
