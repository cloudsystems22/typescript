import { Request, Response} from "express"
import { ForgotPasswordCase } from "./ForgotPasswordCase"
import 'dotenv'
import jwt from 'jsonwebtoken'

export class ForgotPasswordController {
    constructor(
        private forgotPasswordCase: ForgotPasswordCase,
    ){}

    async handle(req: Request, res: Response){
        const { email } = req.body;
        try{
            const user = await this.forgotPasswordCase.execute({name:'', email, password:''})
            if(user == null){
                return res.json({ Recuperação: "Usuário inválido!"})
            }
            return res.status(201).json({ Sucesso: "Sua nova senha foi enviada ao seu e-mail", "Usuário":user.name})

        } catch(err){
            console.log(err)
            return res.status(400).json({
                details: err.message
            })
        }
    }
}