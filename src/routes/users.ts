import { Router, Request, Response } from "express";
//import usersController from "../controllers/usersController";
import { createUserController, createUserCase } from "../UsesCases/CreateUser";

const routes = Router();

routes.post("/", (req:Request, res:Response) => {
    return createUserController.handle(req, res);
});
//routes.post('/', usersController.created);
// routes.put('/user',usersController.updated);
// routes.post('/user/:id', usersController.details);
// routes.delete('/user/:id', usersController.delete);

export default routes