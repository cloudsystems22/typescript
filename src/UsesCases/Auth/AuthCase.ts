import { User } from "../../entity/User";
import { IAuthRepository } from "../../repositories/IAuthRepository";
import { AuthDTO } from "./AuthDTO"

export class AuthCase {
    constructor(private authRepository: IAuthRepository) {}

    async execute(data: AuthDTO){
        const user = new User(data);

        return await this.authRepository.login(user.email, user.password);
    }
}