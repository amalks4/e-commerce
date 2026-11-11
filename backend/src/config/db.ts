import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URL as string)
    .then(response => {
      console.log("database connection successful");
    })
    .catch(err => {
      console.error("database connection failed", err);
    });
};
