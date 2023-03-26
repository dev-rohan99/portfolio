import express from "express";
import { userLogin, userSignup } from "../controllers/user-controller/userController.js";

// init route
const router = express.Router();

// user sign up route
router.post("/sign-up", userSignup);
// user login route
router.post("/login", userLogin);


export default router;
