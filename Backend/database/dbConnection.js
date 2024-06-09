import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "rms",
    });
    console.log("Connected to database!");
  } catch (err) {
    console.error(`Some error occurred while connecting to database: ${err.message}`);
    process.exit(1); // Exit process with failure
  }
};
