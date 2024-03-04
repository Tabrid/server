import express from 'express';
import { createRechargeRequest, approveRechargeRequest, rejectRechargeRequest,getAllRechargeRequests,getByUserId } from '../controllers/recharge.controller.js';
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

router.post('/',protectRoute, createRechargeRequest);
router.put('/approve/:id', approveRechargeRequest);
router.put('/reject/:id', rejectRechargeRequest);
router.get('/', getAllRechargeRequests);
router.get('/my-recharge',protectRoute, getByUserId);

export default router;
