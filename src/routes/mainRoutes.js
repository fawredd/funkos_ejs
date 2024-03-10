import express from 'express';
import { home , contact } from '../controllers/mainController.js';

/* Configuramos Express Router */
export const mainRouter = express.Router();

mainRouter.get("/", home);
mainRouter.get("/home", home);
mainRouter.get("/contact", contact);