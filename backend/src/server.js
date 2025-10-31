import express from "express";
import { ENV } from "./libs/env.js";
import path from "path";

const app = express();

const PORT = ENV.PORT;
const __dirname = path.resolve();

app.get("/books", (req, res) => {
  res.send("this is the books end point");
});

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
app.listen(PORT, (req, res) => {
  console.log(`server is running at ${PORT}`);
  console.log("hi");
});
