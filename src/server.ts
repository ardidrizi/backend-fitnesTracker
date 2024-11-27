import express from "express";
import logger from "morgan";
import workoutRotes from "./routes/workoutsRoutes";
import userRoutes from "./routes/userRoutes";

import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

// Middleware to parse json request
app.use(express.json());
app.use(logger("dev"));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/workouts", workoutRotes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
