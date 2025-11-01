import { clerkClient, requireAuth } from "@clerk/express";
import User from "../models/user.model.js";

export const protectRoute = [
  requireAuth({signInUrl:"/sign-in"}),
  async (req, res, next) => {
    try {
      const clerkId = req.auth().userId;
      if (!clerkId) {
        return res.status(401).json({ mess: "Invalid token " });
      }
      // find user in db by clerkId
      const user = await User.findOne({ clerkId });
      if (!user) return res.status(404).json({ mess: "User not found" });
      //attach user to req
      req.user = user;
      next();
    } catch (err) {
      console.error("error in protectroute middleware", err);
      res.status(500).json({ mess: "Internal server error" });
    }
  },
];
