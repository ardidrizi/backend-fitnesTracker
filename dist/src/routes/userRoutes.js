"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersController_1 = require("../controllers/usersController");
const userRouter = express_1.default.Router();
userRouter.post("/", usersController_1.createUser);
userRouter.get("/", usersController_1.getUsers);
// userRouter.get("/:id", getUserById);
userRouter.put("/:id", usersController_1.updateUser);
userRouter.delete("/:id", usersController_1.deleteUser);
exports.default = userRouter;
