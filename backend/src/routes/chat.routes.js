 import express from "express";
 import { getStreamToken } from "../controllers/chat.controller.js";
 import { protectRoute } from "../middlewares/protectroute.js";

 const router=express.Router();

router.get('/token',protectRoute,   getStreamToken); //protectRoute is an array of middleware that checks if the user is authenticated

 export default router;