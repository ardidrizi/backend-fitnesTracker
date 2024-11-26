-- CreateTable
CREATE TABLE "Workout" (
    "id" SERIAL NOT NULL,
    "exercise_type" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "calories_burned" INTEGER NOT NULL,
    "workout_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "intensity" TEXT NOT NULL,

    CONSTRAINT "Workout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Goal" (
    "id" SERIAL NOT NULL,
    "goal_type" TEXT NOT NULL,
    "target_value" DOUBLE PRECISION NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "target_date" TIMESTAMP(3) NOT NULL,
    "current_progress" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Goal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Progress" (
    "id" SERIAL NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "body_measurements" TEXT NOT NULL,
    "progress_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Progress_pkey" PRIMARY KEY ("id")
);
