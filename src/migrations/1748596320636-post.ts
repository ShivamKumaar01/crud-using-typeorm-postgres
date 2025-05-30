import { MigrationInterface, QueryRunner } from "typeorm";

export class Post1748596320636 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE post ADD Price interger`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE post DROP COLUMN price`,
        )

    }

}
