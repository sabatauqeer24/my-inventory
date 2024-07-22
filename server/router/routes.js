import express from "express";
const router = express.Router();

import { signUp, login } from "../controller/authController.js";
import { addItems } from "../controller/itemController.js";
import { FindItem } from "../controller/findController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
router.post("/signup", signUp);
router.post("/login", login);
router.get("/login", login);
router.use(authMiddleware);
router.post("/add", addItems);
router.post("/find", FindItem);
router.get("/find", FindItem);

export default router;
