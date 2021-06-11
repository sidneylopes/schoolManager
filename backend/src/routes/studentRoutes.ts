import { Router } from "express";
import * as studentControllers from "../controllers/studentControllers";

const studentRoutes = Router();

studentRoutes.post('/students', studentControllers.store);
studentRoutes.get('/students', studentControllers.index);

export default studentRoutes;