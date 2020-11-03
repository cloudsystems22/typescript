import { User } from "../../entity/User";
import { IAuthRepository } from "../IAuthRepository";
import {getRepository, Repository, getManager } from "typeorm";
import bcrypt from "bcryptjs"

export class MysqlAuth implements IAuthRepository {
    async login(email: string, password: string): Promise<User>{
        const getUser = getRepository(User);
        const userExits = await getUser.findOne({ where:{ email }})

        if(!userExits) return null

        const isValidPassword = await bcrypt.compareSync(password, userExits.password);

        
        if(!isValidPassword){
          return null;
          
        }
    
        return userExits
      }
      async logout(id:number): Promise<User>{
        return null
      }
      
      async forgotPassword(email:string, newpassword:string): Promise<User>{
        const getUser = getRepository(User);
        const userExits = await getUser.findOne({ where:{ email }})

        if(!userExits){
          return null
        }
        userExits.password = bcrypt.hashSync(newpassword, 10);
        getUser.save(userExits);

        return userExits
      }
}