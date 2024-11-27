import { PrismaClient, User } from "@prisma/client";
import { Request, Response } from "express";
import {
  CreateUserPayload,
  UpdateUserPayload,
  UserParams,
  WorkoutParams,
} from "../../types";

const prisma = new PrismaClient();

// Create a new user
export const createUser = async (
  req: Request<{}, {}, CreateUserPayload>, // Specify the request body type
  res: Response<User | { error: string }> // Specify response type
) => {
  const { name, email, password } = req.body;
  try {
    const user = await prisma.user.create({
      data: { name, email, password },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user." });
  }
};

// Get all users
export const getUsers = async (
  req: Request,
  res: Response<User[] | { error: string }>
) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        workouts: true,
        goals: true,
        progress: { include: { bodyMeasurements: true } },
      },
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users." });
  }
};

// Get a single user by ID
export const getUserById = async (
  req: Request<UserParams>,
  res: Response<User | { error: string }>
) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
      include: {
        workouts: true,
        goals: true,
        progress: { include: { bodyMeasurements: true } },
      },
    });
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user." });
  }
};

// Update a user
export const updateUser = async (
  req: Request<UserParams, {}, UpdateUserPayload>,
  res: Response<User | { error: string }>
) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: { name, email, password },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to update user." });
  }
};

// Delete a user
export const deleteUser = async (
  req: Request<UserParams>,
  res: Response<{ message: string } | { error: string }>
) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({
      where: { id: Number(id) },
    });
    res.status(204).json({ message: "User deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user." });
  }
};
