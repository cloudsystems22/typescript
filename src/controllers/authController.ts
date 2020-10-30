import { Request, Response} from 'express';
class AuthController {
    static index(req: Request, res: Response){
        return res.json({ rotaAuth: "Bem vindo rota de autenticação!"})
    }
    static login(req: Request, res: Response){
        return res.json({ rotaAuth: "Login!"})
    }
    static logout(req: Request, res: Response){
        return res.json({ rotaAuth: "Logout!"})
    }
    static resetPassword(req: Request, res: Response){
        return res.json({ rotaAuth: "Reset password!"})
    }
}

export default AuthController