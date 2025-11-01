// Stream.io integration functions
// TODO: Configure Stream.io client when you set up Stream.io account

export const upsertStreamUser = async ({ id, name, image }) => {
  // TODO: Implement Stream.io user upsert
  // This will create or update a user in Stream.io
  // Example:
  // const streamClient = StreamChat.getInstance(apiKey, apiSecret);
  // await streamClient.upsertUser({ id, name, image });
  console.log("Upserting Stream user:", { id, name, image });
};

export const deleteStreamUser = async (userId) => {
  // TODO: Implement Stream.io user deletion
  // Example:
  // const streamClient = StreamChat.getInstance(apiKey, apiSecret);
  // await streamClient.deleteUser(userId);
  console.log("Deleting Stream user:", userId);
};

