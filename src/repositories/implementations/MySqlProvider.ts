import { User } from "../../entity/User";
import { IUsersRepository } from "../IUsersRepository";
import {getRepository, Repository, getManager } from "typeorm";

//const entityManager = getManager();
export class MysqlProvider implements IUsersRepository {
  async findAll(): Promise<User[]> {
    const db = await getRepository(User)
    return db.find();
  }
  async save(user: User): Promise<User> {
    const entityManager = getManager();
    const userExits = await entityManager.findOne(User, { where:{ email: user.email }})
    if(userExits){
      return null
    }
    return entityManager.save(user);
  }
  async edit(id: number, user: User): Promise<User> {
    const db = getRepository(User)
    let userExits = await db.findOne(id);

    userExits = { ...userExits, ...user };

    return db.save(userExits);
  }
  
}

