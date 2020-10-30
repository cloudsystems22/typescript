import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { User } from './User'

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 250 })
    name: string;

    @Column("varchar", { length: 200 })
    price: string;

    @Column("varchar", { length: 200 })
    link: string;

    @ManyToOne((type) => User, user => user.products)
    user: User;

}