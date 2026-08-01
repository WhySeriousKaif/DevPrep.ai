import express from "express";
import { protectRoute } from "../middlewares/protectroute.js";
import { createSession, getActiveSessions, getMyRecentSessions, getSessionById, joinSession, endSession, startSession } from "../controllers/session.controller.js";

const router=express.Router();


router.post('/',protectRoute,createSession);
router.get('/active-sessions',protectRoute,getActiveSessions);
router.get('/my-recent-sessions',protectRoute,getMyRecentSessions);
router.get('/:id',protectRoute,getSessionById);
router.post('/:id/join',protectRoute,joinSession);
router.post('/:id/start',protectRoute,startSession);
router.post('/:id/end',protectRoute,endSession);



export default router;