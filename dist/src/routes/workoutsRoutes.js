"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const workoutsController_1 = require("../controllers/workoutsController");
const workoutRouter = express_1.default.Router();
workoutRouter.post("/", workoutsController_1.createWorkout);
workoutRouter.get("/", workoutsController_1.getWorkouts);
exports.default = workoutRouter;
