import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BeforeInsert, BeforeUpdate} from "typeorm";
import { Product } from "./Product";
import bcrypt from "bcrypt";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 250 })
    name: string;

    @Column("varchar", { length: 200 })
    email: string;

    @Column("varchar", { length: 200 })
    password: string;

    // @BeforeInsert()
    // @BeforeUpdate()
    // hashPassword(){
    //     this.password = bcrypt.hashSync(this.password, 10);
    // }

    @OneToMany((type) => Product, products => products.user)
    products: Product[];

    constructor(props: Omit<User, "id" | "name" | "products">) {
        Object.assign(this, props);
    }
    

}
