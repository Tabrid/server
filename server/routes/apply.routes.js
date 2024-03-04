// routes.js
import express from 'express';
import { updateApply ,submitForm , getAllApplications, getApplicationsByUserId , updateNoteAndStatus} from '../controllers/apply.controller.js';
import { uploder } from '../middleware/uploder.js'; // Assuming you have defined the uploader middleware
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

// POST route to submit form with uploader middleware
router.post('/update-form',protectRoute,uploder.single("uploads"), updateApply);
router.post('/order',protectRoute, submitForm);
router.get('/order',getAllApplications);
router.put('/order/:id',updateNoteAndStatus);
router.get('/my-order',protectRoute,getApplicationsByUserId);

// Add other routes as needed...

export default router;
