const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.workout.deleteMany(); // Clear existing data
  console.log("Cleared existing data");

  const workouts = [
    {
      exercise_type: "running",
      duration: 60,
      calories_burned: 500,
      intensity: "high",
    },
    {
      exercise_type: "cycling",
      duration: 45,
      calories_burned: 400,
      intensity: "medium",
    },
    {
      exercise_type: "swimming",
      duration: 30,
      calories_burned: 300,
      intensity: "low",
    },
  ];

  for (const workout of workouts) {
    await prisma.workout.create({
      data: workout,
    });
  }

  const allWorkouts = await prisma.workout.findMany();
  console.log(allWorkouts);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
