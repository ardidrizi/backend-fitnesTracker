import { Request, Response } from "express";

interface Workout {
  exercise_type: string;
  duration: number;
  calories_burned: number;
  intensity: string;
}

interface CreateWorkoutRequest extends Request {
  body: Workout;
}
