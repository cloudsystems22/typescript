import {MigrationInterface, QueryRunner} from "typeorm";

export class database1604022898651 implements MigrationInterface {
    name = 'database1604022898651'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(250) NOT NULL, `email` varchar(200) NOT NULL, `password` varchar(200) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `product` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(250) NOT NULL, `price` varchar(200) NOT NULL, `link` varchar(200) NOT NULL, `userId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `product` ADD CONSTRAINT `FK_329b8ae12068b23da547d3b4798` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product` DROP FOREIGN KEY `FK_329b8ae12068b23da547d3b4798`");
        await queryRunner.query("DROP TABLE `product`");
        await queryRunner.query("DROP TABLE `user`");
    }

}
