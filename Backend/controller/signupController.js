import { User } from "../models/Usermodel.js"; // Correct import path

export const signupUser = async (req, res) => {
  try {
    const { name, email, password, dateOfBirth } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Create a new user
    const newUser = new User({ name, email, password, dateOfBirth });
    await newUser.save();

    res.status(201).json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

