import { MigrationInterface, QueryRunner } from "typeorm";

export class User1748591066202 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.query(
            `ALTER TABLE "user" RENAME COLUMN "name" TO "Name"`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
          await queryRunner.query(
            `ALTER TABLE "user" RENAME COLUMN "Name" TO "name"`,
        )
    }

}
