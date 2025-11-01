// Stream.io integration functions
// TODO: Configure Stream.io client when you set up Stream.io account
import { StreamChat } from "stream-chat";
import { ENV } from "./env.js";

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error("Stream api key or stream secret is missing!");
}
export const chatClient = StreamChat.getInstance(apiKey, apiSecret);
export const upsertStreamUser = async (userData ) => {
  // TODO: Implement Stream.io user upsert
  // This will create or update a user in Stream.io
  // Example:
  // const streamClient = StreamChat.getInstance(apiKey, apiSecret);
  // await streamClient.upsertUser({ id, name, image });
  try {
    await chatClient.upsertUsers(userData);

    console.log("Upserting Stream user:", userData);
    return userData;
  } catch (err) {
    console.err("error upserting Stream user", err);
  }
};

export const deleteStreamUser = async (userId) => {
  // TODO: Implement Stream.io user deletion
  // Example:
  // const streamClient = StreamChat.getInstance(apiKey, apiSecret);
  // await streamClient.deleteUser(userId);
  try {
    await chatClient.deleteUser(userId)
    console.log("stream user deleted")
  } catch (err) {
    console.log("error deleting stream user",err)
  }
};
