import {app} from"./app.js";
import Razorpay from "razorpay";
import { dbConnection } from "./database/dbConnection.js"; // Ensure this path is correct

// Connect to MongoDB
dbConnection();

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET, // Corrected the typo here
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is working on port ${PORT}`);
});
