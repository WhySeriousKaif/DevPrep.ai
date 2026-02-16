import express from "express";
import { protectRoute } from "../middlewares/protectroute.js";
import { getUserProfile, markProblemSolved } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/me", protectRoute, getUserProfile);
router.post("/solve", protectRoute, markProblemSolved);

export default router;
