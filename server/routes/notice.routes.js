import express from 'express';
import { createNotice, getAllNotices } from '../controllers/notice.controller.js';

const router = express.Router();

// POST request to create a new notice
router.post('/notices', createNotice);

// GET request to fetch all notices
router.get('/notices', getAllNotices);

export default router;
