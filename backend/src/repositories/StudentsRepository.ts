import { EntityRepository, Repository } from "typeorm";
import { Student } from "../entities/Student";

@EntityRepository(Student)
class StudentsRepository extends Repository<Student> {

}

export { StudentsRepository };