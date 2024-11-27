export interface CreateUserPayload {
  name: string;
  email: string;
  password: string;
}

export interface UpdateUserPayload {
  name?: string;
  email?: string;
  password?: string;
}

export interface UserParams {
  id: string; // Always a string in URL params
}

export interface CreateWorkoutPayload {
  exercise_type: string;
  duration: number; // Duration in minutes
  calories_burned: number;
  intensity: string;
  userId: number; // Foreign key
}

export interface UpdateWorkoutPayload {
  exercise_type?: string;
  duration?: number;
  calories_burned?: number;
  intensity?: string;
  workout_date?: Date;
}

export interface WorkoutParams {
  id: string; // Always a string in URL params
}
