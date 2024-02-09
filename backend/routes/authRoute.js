import express from "express";
import {
  registerController,
  loginController,
} from "../controllers/authController.js";

const router = express.Router();

//REGISTER
router.post("/register", registerController);
//lOGIN
router.post("/login", loginController);

export default router;
