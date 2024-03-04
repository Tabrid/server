import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar , findUserById , updateBalance , updatePassword} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
router.get("/userInfo", protectRoute, findUserById);
router.put("/update-balance", protectRoute, updateBalance);
router.put("/update-password", protectRoute, updatePassword);

export default router;