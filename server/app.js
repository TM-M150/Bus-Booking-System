import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import aothRoute from "./routes/aoth.js";
import bustypesRoute from "./routes/bustypes.js";
import operationsRoute from "./routes/operations.js";
import usersRoute from "./routes/users.js";
import routsRoute from "./routes/routs.js";
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
app.use("/api/bustypes", bustypesRoute);
app.use("/api/operations", operationsRoute);
app.use("/api/users", usersRoute);
app.use("/api/routs", routsRoute);

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
