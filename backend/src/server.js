import express from "express";
import { ENV } from "./libs/env.js";
import path from "path";
import { connectDB } from "./libs/db.js";
import cors from 'cors'
import {serve} from 'inngest/express'
import { inngest,functions } from "./libs/inngest.js";
import { clerkMiddleware } from "@clerk/express";
import { protectRoute } from "./middlewares/protectroute.js";

const app = express();

const PORT = ENV.PORT;
const __dirname = path.resolve(); 

//middleware=
app.use(express.json())
app.use(cors({
  origin:ENV.CLIENT_URL,credentials:true //server allows our browser to include cookies on req
}))
app.use("/api/inngest",serve({client:inngest,functions}))
app.use(clerkMiddleware()) //this adds auth filed to req   object:req.auth()

app.get("/books", (req, res) => {
  res.send("this is the books end point");
});


// when you pass an array of middleware  to express,it automatically flattens and
// executes them sequensially one by one
app.get('/api/video-calls',protectRoute,(req,res)=>{
  res.status(200).json({message:"this is video end point"})
})

// Serve frontend static files (works in both development and production)
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Serve React app for root path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
});

// Catch-all route to serve React app for any non-API routes
// Using "/{*any}" for Express 5 compatibility (matches all paths except root)
app.get("/{*any}", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, (req, res) => {
      console.log(`server is running at ${PORT}`);
    });
  } catch (err) {
        console.error("error in starting the server 💥" ,err)
  }
};

startServer()