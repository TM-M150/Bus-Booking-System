import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import aothRoute from "./routes/aoth.js";
import bustypesRoute from "./routes/bustypes.js";
import operationsRoute from "./routes/operations.js";
import usersRoute from "./routes/users.js";
import routsRoute from "./routes/routs.js";

// LOAD CONFIG
dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

// MIDDLEWARES
app.use("/aoth", aothRoute);
app.use("/bustypes", bustypesRoute);
app.use("/operations", operationsRoute);
app.use("/users", usersRoute);
app.use("/routs", routsRoute);

const PORT = process.env.PORT || 3600;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode, on port ${PORT}`)
);
