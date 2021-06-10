import { Router } from "express";
import * as userControllers from "../controllers/userControllers";

const userRoutes = Router();

userRoutes.post('/users', userControllers.store);
userRoutes.get('/users', userControllers.index);

export default userRoutes;