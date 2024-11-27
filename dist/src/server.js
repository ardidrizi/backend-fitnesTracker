"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const workoutsRoutes_1 = __importDefault(require("./routes/workoutsRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.SERVER_PORT;
// Middleware to parse json request
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
// Routes
app.use("/api/users", userRoutes_1.default);
app.use("/api/workouts", workoutsRoutes_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
