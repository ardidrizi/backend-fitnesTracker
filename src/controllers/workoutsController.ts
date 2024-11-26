import { Request, Response } from "express";
import prisma from "../config/prisma";

import { CreateWorkoutRequest, Workout } from "../../global";

export const createWorkout = async (
  req: CreateWorkoutRequest,
  res: Response
) => {
  try {
    const { exercise_type, duration, calories_burned, intensity } = req.body;

    const newWorkout = await prisma.workout.create({
      data: {
        exercise_type,
        duration,
        calories_burned,
        intensity,
      },
    });

    res.status(201).json(newWorkout);
  } catch (error) {
    res.status(500).json({ message: "Error creating workout", error });
  }
};

export const getWorkouts = async (req: Request, res: Response) => {
  try {
    const workouts: Workout[] = await prisma.workout.findMany();
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching workouts", error });
  }
};
