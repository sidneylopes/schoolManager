import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createStudents1623441393045 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "students",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true
          },
          {
            name: "firstname",
            type: "varchar",
          },
          {
            name: "lastname",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "phone",
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
    await queryRunner.dropTable("students");
  }

}
