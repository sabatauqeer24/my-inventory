import express from "express";
const router = express.Router();
import { homepage } from "../controller/home.js";
import { signUp } from "../controller/signup.js";
router.get("/", homepage);
router.post("/signup", signUp);
router.get("/signup", signUp);

export default router;
