import { Router } from "express";
import indexController from "../controllers/indexController";

const routes = Router();

routes.get('/', indexController.index);

export default routes