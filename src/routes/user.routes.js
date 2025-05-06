import express from "express";
import { Router } from "express";
import registerUser from "../controllers/user.controller.js";

const app = express();

const userRouter = Router();

// userRouter.route("/required").post(registerUser)

userRouter.post("/required", registerUser)


export default userRouter