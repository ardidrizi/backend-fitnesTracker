import express from "express";
import { createWorkout, getWorkouts } from "../controllers/workoutsController";

const workoutRouter = express.Router();

workoutRouter.post("/", createWorkout);
workoutRouter.get("/", getWorkouts);

export default workoutRouter;
