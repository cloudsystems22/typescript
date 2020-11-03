import { Router, Request, Response } from "express";
import { authController } from "../UsesCases/Auth";
import { forgotPasswordController } from "../UsesCases/ForgotPassword";

const routes = Router();

//routes.get('/', authController.index);
routes.post('/login', (req: Request, res: Response) => {
    return authController.handle(req, res);
});

routes.post('/forgotpassword', (req: Request, res: Response) => {
    return forgotPasswordController.handle(req, res);
})

export default routes