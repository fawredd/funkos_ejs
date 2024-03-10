import express from 'express';
import { admin , createView , createItem , editView , editItem , deleteItem } from '../controllers/adminController.js';
import { upload } from '../middlewares/uploadFiles.js';
import { adminLoggedValidation , itemValidation } from '../middlewares/validator.js';

/* Configuramos Express Router */
export const adminRouter = express.Router();

adminRouter.get("/", adminLoggedValidation, admin);
adminRouter.get("/create", adminLoggedValidation, createView);
adminRouter.post("/create", adminLoggedValidation, upload.fields([{ name: 'imgFront', maxCount: 1 }, { name: 'imgBack', maxCount: 1 }]), itemValidation, createItem);
adminRouter.get("/edit/:id", adminLoggedValidation, editView);
adminRouter.put("/edit/:id", adminLoggedValidation, upload.fields([{ name: 'imgFront', maxCount: 1 }, { name: 'imgBack', maxCount: 1 }]), itemValidation, editItem);
adminRouter.delete("/delete/:id", adminLoggedValidation, deleteItem);

