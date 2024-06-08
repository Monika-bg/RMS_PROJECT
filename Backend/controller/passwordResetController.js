import { User } from '../models/Usermodel.js';

export const forgotPassword = async (req, res) => {
    const { email, dateOfBirth, newPassword } = req.body;

    try {
        // Ensure User model and resetPassword method are correctly implemented
        const resetSuccessful = await User.resetPassword(email, dateOfBirth, newPassword);

        // Assuming resetPassword returns true on success, false or null on failure
        if (resetSuccessful) {
            return res.status(200).json({ message: 'Password reset successful.' });
        } else {
            return res.status(400).json({ message: 'Password reset failed. Invalid credentials.' });
        }
    } catch (error) {
        // Log any unexpected errors to console for debugging
        console.error('Forgot password error:', error);
        return res.status(500).json({ message: 'Internal server error. Please try again later.' });
    }
};
