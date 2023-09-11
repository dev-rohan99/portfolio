import express from "express";
import { downloadMyResume, mailSendController, userLogin, userSignup } from "../controllers/user-controller/userController.js";
import { adminPortfolioCreate, getAllAdminPortfolio, packageCreate, packagesGet } from "../controllers/admin-controller/adminController.js";
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
// admin packages route
router.post("/packages", verifyUser, packageCreate);
// packages get
router.get("/packages/get", packagesGet);
// client mail route
router.post("/client-mail", mailSendController);
// download my resume
// router.get("/download-my-resume", downloadMyResume);


export default router;
