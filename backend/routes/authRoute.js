import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

//REGISTER
router.post("/register", registerController);
//lOGIN
router.post("/login", loginController);
//FORGOT PASSWORD
router.post("/forgot-password", forgotPasswordController);
//TEST
router.get("/test", requireSignIn, isAdmin, testController);
//PROTECTED ROUTE AUTH
router.get("user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
