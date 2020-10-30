import { Router } from "express";
import productsController from "../controllers/productsController";

const routes = Router();

routes.get('/', productsController.index);
routes.get('/:id', productsController.userproducts);
routes.post('/favorited', productsController.favorited);
routes.post('/unfavoritar', productsController.unfavoritd);

export default routes