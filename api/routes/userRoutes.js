import express from "express";
import { userLogin, userSignup } from "../controllers/user-controller/userController.js";
import { adminPortfolioCreate, getAllAdminPortfolio } from "../controllers/admin-controller/adminController.js";
import { verifyUser } from "../middlewares/auth/authMiddleware.js";

// init route
const router = express.Router();

// user sign up route
router.post("/sign-up", userSignup);
// user login route
router.post("/login", userLogin);
// admin portfolio route
router.post("/portfolio", verifyUser, adminPortfolioCreate);
// admin portfolio route
router.get("/portfolio/get", getAllAdminPortfolio);


export default router;
