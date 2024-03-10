import express from 'express';
import { shop , item , addItem , cart , deleteItemCart , purchaseCart } from '../controllers/shopController.js';
import { cartEmpty, userLoggedValidation } from '../middlewares/validator.js';

/* Configuramos Express Router */
export const shopRouter = express.Router();

shopRouter.get("/", shop);
shopRouter.get("/item/:id", item);
shopRouter.post("/item/:id", addItem);
shopRouter.get("/cart", cart);
shopRouter.delete("/cart/:id", deleteItemCart)
shopRouter.post('/cart', userLoggedValidation, cartEmpty, purchaseCart)