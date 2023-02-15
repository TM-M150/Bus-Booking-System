import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import aothRoute from "./routes/aoth.js";
import busRoute from "./routes/bus.js";
import userRoute from "./routes/user.js";
import roadRoute from "./routes/road.js";
import addressRoute from "./routes/address.js";
import cookieParser from "cookie-parser";

// LOAD CONFIG
dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

// MIDDLEWARES
// Main
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/api/aoth", aothRoute);
app.use("/api/address", addressRoute);
app.use("/api/bustypes", busRoute);
app.use("/api/users", userRoute);
app.use("/api/routes", roadRoute);

// Error Handling
app.use(function (err, req, res, next) {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const PORT = process.env.PORT || 3600;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode, on port ${PORT}`)
);
