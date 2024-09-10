import express from "express";
import { getMessages, sendMessages } from "../controllers/messagesController.js";
import protectiveRoute from "../middleware/protectiveRoute.js";

const router = express.Router()

router.get("/:id",protectiveRoute ,getMessages)
router.post("/send/:id",protectiveRoute ,sendMessages)

export default router;


