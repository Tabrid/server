// routes.js
import express from 'express';
import { updateApply } from '../controllers/apply.controller.js';

const router = express.Router();

// POST route to submit form with uploader middleware
router.put('/update-form/:id', updateApply);

// Add other routes as needed...

export default router;