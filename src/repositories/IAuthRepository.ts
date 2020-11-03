import { User } from "../entity/User";

export interface IAuthRepository {
  login(email:string, password:string): Promise<User>;
  logout(id:number): Promise<User>;
  forgotPassword(email:string, newpassword:string): Promise<User>;
}