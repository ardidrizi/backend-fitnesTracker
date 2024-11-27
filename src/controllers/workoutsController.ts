import { PrismaClient, Workout } from "@prisma/client";
import { Request, Response } from "express";
import {
  CreateWorkoutPayload,
  UpdateWorkoutPayload,
  WorkoutParams,
} from "../../types";

const prisma = new PrismaClient();

// Create a new workout
export const createWorkout = async (
  req: Request<{}, {}, CreateWorkoutPayload>, // Request body type
  res: Response<Workout | { error: string }> // Response type
) => {
  const { exercise_type, duration, calories_burned, intensity, userId } =
    req.body;
  try {
    const workout = await prisma.workout.create({
      data: { exercise_type, duration, calories_burned, intensity, userId },
    });
    res.status(201).json(workout);
  } catch (error) {
    res.status(500).json({ error: "Failed to create workout." });
  }
};

// Get all workouts
export const getWorkouts = async (
  req: Request,
  res: Response<Workout[] | { error: string }>
) => {
  try {
    const workouts = await prisma.workout.findMany({
      include: { user: true }, // Include the associated user
    });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch workouts." });
  }
};

// Get a single workout by ID
export const getWorkoutById = async (
  req: Request<WorkoutParams>,
  res: Response<Workout | { error: string }>
) => {
  const { id } = req.params;
  try {
    const workout = await prisma.workout.findUnique({
      where: { id: Number(id) },
      include: { user: true }, // Include the associated user
    });
    if (!workout) {
      return res.status(404).json({ error: "Workout not found." });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch workout." });
  }
};

// Update a workout
export const updateWorkout = async (
  req: Request<WorkoutParams, {}, UpdateWorkoutPayload>,
  res: Response<Workout | { error: string }>
) => {
  const { id } = req.params;
  const { exercise_type, duration, calories_burned, intensity, workout_date } =
    req.body;
  try {
    const workout = await prisma.workout.update({
      where: { id: Number(id) },
      data: {
        exercise_type,
        duration,
        calories_burned,
        intensity,
        workout_date,
      },
    });
    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ error: "Failed to update workout." });
  }
};

// Delete a workout
export const deleteWorkout = async (
  req: Request<WorkoutParams>,
  res: Response<{ message: string } | { error: string }>
) => {
  const { id } = req.params;
  try {
    await prisma.workout.delete({
      where: { id: Number(id) },
    });
    res.status(204).json({ message: "Workout deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete workout." });
  }
};
