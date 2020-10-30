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
    password: number;

    @OneToMany((type) => Product, products => products.user)
    products: Product[];

}
