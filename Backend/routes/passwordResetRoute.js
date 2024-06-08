import express from 'express';
import { forgotPassword } from '../controller/passwordResetController.js';

const router = express.Router();

router.post('/send', forgotPassword); // Handle POST requests for resetting password

export default router;
