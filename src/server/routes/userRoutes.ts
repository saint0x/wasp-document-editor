// server/routes/userRoutes.ts

import express from 'express';
import { getUserProfile } from '../controllers/userController';

const router = express.Router();

// Get user profile
router.get('/user/profile', getUserProfile);

export default router;
