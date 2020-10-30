import { Router } from "express";
import usersController from "../controllers/usersController";

const routes = Router();

routes.get('/', usersController.index);
routes.post('/user', usersController.created);
routes.put('/user',usersController.updated);
routes.post('/user/:id', usersController.details);
routes.delete('/user/:id', usersController.delete);

export default routes