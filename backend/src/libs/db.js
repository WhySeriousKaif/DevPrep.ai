import mongoose from 'mongoose'
import { ENV } from './env.js'

export const connectDB=async()=>{
    try{
       const conn= await mongoose.connect(ENV.DB_URL)
        console.log("MONGO CONNECTED ✅",conn.connection.host);


    }
    catch(err){
        console.log("error in connecting the db",err)
        process.exit(1)

    }
}



