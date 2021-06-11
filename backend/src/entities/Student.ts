import { Entity, Column, PrimaryColumn, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("students")
class Student {

  @PrimaryColumn()
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id){
      this.id = uuid();
    }
  }

}

export { Student };