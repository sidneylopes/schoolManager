import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUsers1623425289800 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "users",
          columns: [
            {
              name: "id",
              type: "varchar",
              isPrimary: true
            },
            {
              name: "username",
              type: "varchar",
            },
            {
              name: "fullname",
              type: "varchar",
            },
            {
              name: "email",
              type: "varchar",
            },
            {
              name: "password",
              type: "varchar",
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()"
            },
          ],
        })
    );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("users");
    }

}
