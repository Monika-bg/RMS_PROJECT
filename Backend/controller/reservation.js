import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  try {
    const { firstName, lastName, email, date, time, phone } = req.body;
    
    // Check if required fields are provided
    if (!firstName || !lastName || !email || !date || !time || !phone) {
      throw new ErrorHandler("Please Fill Full Reservation Form!", 400);
    }

    // Create reservation using Reservation model
    const reservation = await Reservation.create({ firstName, lastName, email, date, time, phone });

    res.status(200).json({
      success: true,
      data: reservation,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    // Handle errors using error middleware
    next(error);
  }
};

export default sendReservation;
