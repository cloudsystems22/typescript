import { Router } from "express";
import authController from "../controllers/authController";

const routes = Router();

routes.get('/', authController.index);
routes.post('/login', authController.login);
routes.post('/logout', authController.logout);
routes.post('/resetpassword', authController.resetPassword);

export default routes