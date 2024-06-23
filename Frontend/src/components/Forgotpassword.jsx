import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Form, Title, Input, Button } from './Components'; // Import necessary components

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(''); // State for date of birth
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State to control the display of the success popup

    const handleResetPassword = async (e) => {
        e.preventDefault();
        // Validate input fields
        if (!email || !dateOfBirth || !newPassword || !confirmNewPassword) {
            toast.error("Please fill in all fields.");
            return;
        }
        if (newPassword !== confirmNewPassword) {
            toast.error("Passwords do not match.");
            return;
        }
        try {
            // Send request to server to reset password
            const response = await axios.post('http://localhost:4000/api/v1/reset-password/send', { email, dateOfBirth, newPassword });
            // Handle success
            setShowSuccessPopup(true); // Display success popup
            toast.success("Password reset successful!");
        } catch (error) {
            if (error.response && error.response.data.message === "Date of birth does not match.") {
                toast.error("Date of birth does not match. Password reset failed.");
            } else {
                toast.error("Date of birth does not match. Password reset failed.");
            }
        }
    };

    return (
        <Container>
            <Form>
                <Title>Forgot Password</Title>
                <Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type='date' value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                <Input type='password' placeholder='New Password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                <Input type='password' placeholder='Confirm New Password' value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} />
                <br></br>
                <br></br>
                <Button onClick={handleResetPassword}>Reset Password</Button>
            </Form>
            {/* Success popup */}
            {showSuccessPopup && (
                <div className="success-popup">
                    
                    {/* Add a button or link to close the popup if needed */}
                </div>
            )}
            <ToastContainer />
        </Container>
    );
}

export default ForgotPassword;
