import express from "express";
import { ENV } from "./libs/env.js";
import path from "path";
import { connectDB } from "./libs/db.js";
import cors from 'cors'
import {serve} from 'inngest/express'
import { inngest,functions } from "./libs/inngest.js";
import { clerkMiddleware } from "@clerk/express";
import { protectRoute } from "./middlewares/protectroute.js";
import chatRoutes from "./routes/chat.routes.js";
import sessionRoutes from "./routes/session.routes.js";
import interviewRoutes from "./routes/interview.routes.js";

const app = express();

const PORT = ENV.PORT;
const __dirname = path.resolve(); 

// CORS configuration - MUST come before other middleware
// Allow multiple origins for dev and production
const allowedOrigins = [
  "http://localhost:5173", // Local development
  "https://evalio-3cqz4.sevalla.app", // Production frontend
  ENV.CLIENT_URL, // From environment variable
].filter(Boolean); // Remove any undefined values

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Check if origin is in allowed list or contains localhost
    if (allowedOrigins.includes(origin) || origin.includes("localhost") || origin.includes("sevalla.app")) {
      callback(null, true);
    } else {
      // Allow if CLIENT_URL is set and matches
      if (ENV.CLIENT_URL) {
        try {
          const clientHost = new URL(ENV.CLIENT_URL).hostname;
          if (origin.includes(clientHost)) {
            return callback(null, true);
          }
        } catch (e) {
          // Invalid URL, continue
        }
      }
      // Default: allow the request
      callback(null, true);
    }
  },
  credentials: true //server allows our browser to include cookies on req
}))

// Body parsing - Increase size limit for large audio recordings (50MB)
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use(clerkMiddleware()) //this adds auth filed to req   object:req.auth()


app.use("/api/inngest",serve({client:inngest,functions}))

app.use("/api/chat",chatRoutes)
app.use('/api/session',sessionRoutes)
app.use('/api/interview',interviewRoutes)


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
// Exclude /api routes - they should be handled above
app.use((req, res, next) => {
  // If it's an API route, don't serve the React app
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: "API route not found" });
  }
  // Otherwise serve the React app
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