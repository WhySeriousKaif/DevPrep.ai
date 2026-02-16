import { upsertStreamUser } from '../libs/stream.js';
import { ENV } from '../libs/env.js';

const sync = async () => {
    // Manually setting user data for MD Kaif (same as seed script)
    const userData = {
        id: "user_34sTuL9vxifpJjhh5IknEfxZv0g",
        name: "MD Kaif",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kaif"
    };

    console.log("Syncing user to Stream.io...");
    try {
        const result = await upsertStreamUser(userData);
        if (result) {
            console.log("✅ User synced to Stream.io successfully!");
        } else {
            console.error("❌ Failed to sync user (returned null). Check API keys.");
        }
    } catch (e) {
        console.error("❌ Exception during sync:", e);
    }
    // Stream client keeps the process alive, so we need to exit explicitly
    process.exit(0);
};

sync();
