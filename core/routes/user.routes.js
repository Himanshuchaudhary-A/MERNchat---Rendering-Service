import { Router } from "express";
import { signup, login } from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/user.middleware.js";

const router = Router();
router.route("/signup").post(signup)
router.route("/login").post(login)
export default router;