import { User } from "../../entity/User";
import { IAuthRepository } from "../../repositories/IAuthRepository";
import { IMailProvider } from "../../providers/IMailProvider";
import { ForgotPasswordDTO } from "./ForgotPasswordDTO";

export class ForgotPasswordCase {
    constructor(
        private authRepository: IAuthRepository,
        private mailProvider: IMailProvider,
    ){}
    
    async execute(data: ForgotPasswordDTO){
        const user = new User(data);
        let newPassword = Math.random().toString(36).slice(-10);
        const existUser = await this.authRepository.forgotPassword(user.email, newPassword);
        await this.mailProvider.sendMail({
            to:{
                name: existUser.name,
                email: existUser.email
            },
            from:{
                name: "Fakebuscape",
                email: "equipe@fakebuscape.com",
            },
            subject: "Recuparação de password",
            body: `<h2>Nova Senha.</h2><p>Sua nova senha é: <b>${newPassword}</b></p>`
        })
        return existUser
    }
}