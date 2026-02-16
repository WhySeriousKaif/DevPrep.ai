import mongoose from 'mongoose'
import { ENV } from './env.js'

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(ENV.DB_URL)
        console.log("MONGO CONNECTED ✅", conn.connection.host);



    }
    catch (err) {
    console.log("❌ Error connecting to MongoDB:", err.message);
    console.log("💡 TIP: Check your MongoDB Atlas 'Network Access' settings. You may need to whitelist your current IP address (or use 0.0.0.0/0 for development). ");
    process.exit(1)
    }
}   








