import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { errorMiddleware } from "./error/error.js";
import { reservationRouter } from './routes/reservationRoute.js';
import { loginRouter } from './routes/loginRoute.js';
import { signupRouter } from './routes/signupRoute.js';
import paymentRouter from './routes/paymentRoutes.js';
import passwordResetRouter from './routes/passwordResetRoute.js';

dotenv.config({ path: "./config/config.env" });

const app = express();

// Middleware setup
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["POST"],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); // Log requests in dev format

// Routes setup
app.use("/api/v1/reservation", reservationRouter);
app.use("/api/v1/login", loginRouter);
app.use("/api/v1/signup", signupRouter);
app.use("/api", paymentRouter);
app.use("/api/v1/reset-password", passwordResetRouter);

// Endpoint for fetching Razorpay API key
app.get("/api/getkey", (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
});

// Error handling middleware
app.use(errorMiddleware);

export { app };
