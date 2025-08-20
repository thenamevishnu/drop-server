import { Router } from "express";
import userController from "../controllers/user.controller.mjs";

const userRoute = Router();

userRoute.post("/signup", userController.signup)

export default userRoute;