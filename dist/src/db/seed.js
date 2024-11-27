"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.workout.deleteMany(); // Clear existing data
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
            yield prisma.workout.create({
                data: workout,
            });
        }
        const allWorkouts = yield prisma.workout.findMany();
        console.log(allWorkouts);
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
