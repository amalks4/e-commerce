import express from "express";
import type { Request, Response, NextFunction } from "express";
import cors from "cors";
import userRoutes from "./routes/user-routes.js";
import { connectDB } from "./config/db.js";

import dotenv from "dotenv";
dotenv.config();

//create an app from express
const app = express();

//create middleware
app.use(express.json());
app.use(cors());
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`Incoming Request ${req.method} ${req.url}`);
  next();
});

connectDB();

app.use("/", userRoutes);

//error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("Internal Server Error", err);
  res.status(500).json({
    message: "Internal Server Error",
    error: err.message
  });
});

export default app;
