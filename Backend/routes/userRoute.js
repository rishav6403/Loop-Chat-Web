import express from "express";
import { getUsersForSidebar } from "../controllers/userController.js";
import protectiveRoute from "../middleware/protectiveRoute.js";

const router = express.Router();

router.get("/",protectiveRoute ,getUsersForSidebar)

export default router;

