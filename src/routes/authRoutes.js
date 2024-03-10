import express from 'express';
import { login , doLogin , register , doRegister , logout } from '../controllers/authController.js';
import { loginValidation , registerValidation , loggedValidation } from '../middlewares/validator.js';

/* Express Router */
export const authRouter = express.Router();

authRouter.get("/login", loggedValidation, login);
authRouter.post("/login", loginValidation, doLogin);
authRouter.get("/register",loggedValidation, register);
authRouter.post("/register", registerValidation, doRegister);
authRouter.get("/logout", logout);
