import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import User from "../models/user.model.js";
import { deleteStreamUser, upsertStreamUser } from "./stream.js";

export const inngest = new Inngest({ id: "talent-iq" });

const syncUser = inngest.createFunction(
  { id: "sync-user" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    await connectDB();

    const { id, email_addresses, first_name, last_name, image_url } = event.data;

    const newUser = {
      clerkId: id,
      email: email_addresses[0]?.email_address,
      name: `${first_name || ""} ${last_name || ""}`,
      profileImage: image_url,
    };

    await User.create(newUser);
    console.log("✅ User created in database:", newUser.email);

    // Sync to Stream.io
    try {
      const streamResult = await upsertStreamUser({
        id: newUser.clerkId.toString(),
        name: newUser.name || "User", // Default name if empty
        image: newUser.profileImage || "",
      });
      
      if (streamResult) {
        console.log("✅ User synced to Stream.io successfully");
      } else {
        console.warn("⚠️ User created but Stream.io sync failed (check API keys)");
      }
      //todo: send welcome email to user
    } catch (streamError) {
      console.error("❌ Error syncing user to Stream.io:", streamError);
      // Continue even if Stream fails - user is already in database
    }
  }
);

const deleteUserFromDB = inngest.createFunction(
  { id: "delete-user-from-db" },
  { event: "clerk/user.deleted" },

  async ({ event }) => {
    
    await connectDB();

    const { id } = event.data;
    await User.deleteOne({ clerkId: id });

    await deleteStreamUser(id.toString());
  }
);

export const functions = [syncUser, deleteUserFromDB];




