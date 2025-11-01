import { StreamChat } from "stream-chat";
import { StreamClient } from "@stream-io/node-sdk";
import { ENV } from "./env.js";

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

// Initialize Stream clients only if API keys are provided
let chatClient = null;
let streamClient = null;

if (apiKey && apiSecret) {
  chatClient = StreamChat.getInstance(apiKey, apiSecret); // will be used for chat features
  streamClient = new StreamClient(apiKey, apiSecret); // will be used for video calls
  console.log("✅ Stream.io clients initialized");
} else {
  console.warn("⚠️ Stream API keys are missing. Stream features will be disabled.");
}

export { chatClient, streamClient };

export const upsertStreamUser = async (userData) => {
  try {
    if (!chatClient) {
      console.error("⚠️ Stream chatClient not initialized. Cannot upsert user.");
      return null;
    }
    await chatClient.upsertUser(userData);
    console.log("✅ Stream user upserted successfully:", userData.id);
    return userData;
  } catch (error) {
    console.error("❌ Error upserting Stream user:", error.message || error);
    return null;
  }
};

export const deleteStreamUser = async (userId) => {
  try {
    if (!chatClient) {
      console.error("⚠️ Stream chatClient not initialized. Cannot delete user.");
      return null;
    }
    await chatClient.deleteUser(userId);
    console.log("✅ Stream user deleted successfully:", userId);
    return true;
  } catch (error) {
    console.error("❌ Error deleting Stream user:", error.message || error);
    return null;
  }
};