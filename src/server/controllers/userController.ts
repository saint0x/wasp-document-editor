// server/controllers/userController.ts

import { Request, Response } from 'express';
import User from '../models/User';

// Get user profile
const getUserProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id; // Assuming user ID is available in request object
    const userProfile = await User.findById(userId).populate('documents');
    if (!userProfile) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(userProfile);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Error fetching user profile' });
  }
};

export { getUserProfile };
