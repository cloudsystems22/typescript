import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Product } from "./Product";

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

    @OneToMany((type) => Product, products => products.user)
    products: Product[];

    constructor(props: Omit<User, "id" | "products">) {
        Object.assign(this, props);
    }
    

}
