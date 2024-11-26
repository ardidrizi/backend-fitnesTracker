import express from "express";
import logger from "morgan";
import workoutRotes from "./routes/workoutsRoutes";
// import goalRoutes from './routes/goalRoutes';
// import progresRoutes from './routes/progresRoutes';
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

// Middleware to parse json request
app.use(express.json());
app.use(logger("dev"));

// Routes
app.use("/api/workouts", workoutRotes);
// app.use('/api/goals', goalRoutes);
// app.use('/api/progres', progresRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
