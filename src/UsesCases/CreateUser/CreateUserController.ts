import { Request, Response } from "express";
import { CreateUserCase } from "./CreateUserCase";
import bcrypt from "bcryptjs";
import 'dotenv'
import jwt from 'jsonwebtoken';
export class CreateUserController {
  constructor(private createUserCase: CreateUserCase) {}

  generationToken(params = {}){
    return jwt.sign(params, process.env.APP_SECRET, {
        expiresIn: 86400,
    });
  }

  async handle(req: Request, res: Response): Promise<Response>{
    const { name, email, password } = req.body;
    try {

      const user = await this.createUserCase.execute({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
      });
      if(user == null){
        return res.status(409).json({ Retorno: "Usuário já cadastrado"})
      }
      return res.status(201).json({ Sucesso: "Usuário cadastrado com sucesso!", "Usuario" : user.name, "Token": this.generationToken({ id: user.id })});
    } catch (err) {
      console.log(err);
      
      return res.status(400).json({
        details: err.message,
      });
    }
  }
}