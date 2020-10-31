import { Router } from "express";
//import usersController from "../controllers/usersController";
import { createUserController } from "../UsesCases/CreateUser";

const routes = Router();

routes.post("/", createUserController.handle);
// routes.post('/user', usersController.created);
// routes.put('/user',usersController.updated);
// routes.post('/user/:id', usersController.details);
// routes.delete('/user/:id', usersController.delete);

export default routes