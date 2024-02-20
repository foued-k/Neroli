import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

//REGISTER
router.post("/register", registerController);
//lOGIN
router.post("/login", loginController);
//TEST
router.get("/test", requireSignIn, isAdmin, testController);
//PROTECTED ROUTE AUTH
router.get("user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
