import { Request, Response} from 'express';
class UsersController {
    static index(req: Request, res: Response){
        return res.json({ rotaUsers: "Bem vindo rota usuario!"})
    }
    static created(req: Request, res: Response){
        console.log(req.body);
        return res.json({ rotaUsers: "Cadastro Usuario"})
    }
    static updated(req: Request, res: Response){
        return res.json({ rotaUsers: "Atualizar Usuário"})
    }
    static details(req: Request, res: Response){
        return res.json({ rotaUsers: "Detalhes Usuário"})
    }
    static delete(req: Request, res: Response){
        return res.json({ rotaUsers: "Delete Usuário"})
    }
}

export default UsersController