import express from "express";
import { protectRoute } from "../middlewares/protectroute.js";
import { getUserProfile, markProblemSolved, toggleSolvedProblem, toggleRevisionProblem } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/me", protectRoute, getUserProfile);
router.post("/solve", protectRoute, markProblemSolved);
router.post("/toggle-solved", protectRoute, toggleSolvedProblem);
router.post("/toggle-revision", protectRoute, toggleRevisionProblem);

export default router;
