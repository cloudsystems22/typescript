import { User } from "../../entity/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { CreateUseDTO } from "./CreateUserDTO";

export class CreateUserCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider,
  ) {}

  async execute(data: CreateUseDTO) {
    const user = new User(data);
    
    const newUser = await this.usersRepository.save(user);
    await this.mailProvider.sendMail({
      to:{
          name: data.name,
          email: data.email
      },
      from:{
          name: "Fakebuscapé",
          email: "equipe@fakebuscape.com",
      },
      subject: "Seja bem vindo ao Fakebuscapé",
      body: "<h2>Fakebuscapé</h2><p>Vosê já pode se logar a plataforma</p>"
    })
    return newUser
  }
}