import { Request, Response } from "express";
import { CreateUserCase } from "./CreateUserCase";
import bcrypt from "bcrypt";
export class CreateUserController {
  constructor(private createUserCase: CreateUserCase) {}

  async handle(req: Request, res: Response): Promise<Response>{
    const { name, email, password } = req.body;
    try {

      const user = await this.createUserCase.execute({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
      });


      return res.status(201).send();
    } catch (err) {
      console.log(err);
      
      return res.status(400).json({
        details: err.message,
      });
    }
  }
}