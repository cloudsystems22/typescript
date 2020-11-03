import { Request, Response } from "express";
import { AuthCase } from "./AuthCase";
import 'dotenv'
import jwt from 'jsonwebtoken';

export class AuthController {
    constructor(private authCase: AuthCase) {}

    generationToken(params = {}){
        return jwt.sign(params, process.env.APP_SECRET, {
            expiresIn: 86400,
        });
    }
    async handle(req:Request, res: Response) {
        const { email, password } = req.body;
        try{
            const user = await this.authCase.execute({ email, password })
            if(user == null){
                return res.json({ Login: "Usuário inválido!"})
            }
            return res.status(201).json({ Sucesso: "Usuário logado!", "Usuario" : user.name, "Token": this.generationToken({ id: user.id })})

        } catch (err) {
            console.log(err)
            return res.status(400).json({
                details: err.message
            })

        };
    }
}