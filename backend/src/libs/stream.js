// Stream.io integration functions
// TODO: Configure Stream.io client when you set up Stream.io account
import { StreamChat } from "stream-chat";
import { ENV } from "./env.js";

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

// Initialize Stream Chat client (only if API keys are provided)
let chatClient = null;

if (apiKey && apiSecret) {
  chatClient = StreamChat.getInstance(apiKey, apiSecret);
  console.log("✅ Stream.io client initialized");
} else {
  console.warn("⚠️ Stream.io API keys are missing. Stream features will be disabled.");
}

export { chatClient };
export const upsertStreamUser = async (userData) => {
  // Stream.io user upsert - creates or updates a user in Stream.io
  try {
    // Check if API keys and client are configured
    if (!apiKey || !apiSecret || !chatClient) {
      console.error("⚠️ Stream API keys are missing or client not initialized. Cannot upsert user.");
      return null;
    }

    // Stream.io upsertUsers expects an array of user objects
    // Format: [{ id: string, name: string, image: string }]
    const streamUser = {
      id: userData.id,
      name: userData.name || "",
      image: userData.image || "",
    };

    console.log("📤 Upserting Stream user:", streamUser);

    const response = await chatClient.upsertUsers([streamUser]);

    console.log("✅ Stream user upserted successfully:", streamUser.id);
    return response.users[streamUser.id];
  } catch (err) {
    console.error("❌ Error upserting Stream user:", err.message || err);
    // Don't throw - allow the process to continue even if Stream fails
    return null;
  }
};

export const deleteStreamUser = async (userId) => {
  // Stream.io user deletion
  try {
    // Check if API keys and client are configured
    if (!apiKey || !apiSecret || !chatClient) {
      console.error("⚠️ Stream API keys are missing or client not initialized. Cannot delete user.");
      return null;
    }

    await chatClient.deleteUser(userId);
    console.log("✅ Stream user deleted successfully:", userId);
    return true;
  } catch (err) {
    console.error("❌ Error deleting Stream user:", err.message || err);
    // Don't throw - allow the process to continue even if Stream fails
    return null;
  }
};
