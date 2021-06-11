import { getCustomRepository, Repository } from "typeorm";
import { Student } from "../entities/Student";
import { StudentsRepository } from "../repositories/StudentsRepository";

interface Request {
  email: string;
  phone: string;
  firstname: string;
  lastname: string;
}

interface Response {
  id: number;
  email: string;
  phone: string;
  firstname: string;
  lastname: string;
}

class StudentsService {

  private studentsRepository: Repository<Student>;
  constructor (){
    this.studentsRepository = getCustomRepository(StudentsRepository)
  }

  async create(email: string, phone: string, firstname: string, lastname: string) {

    const studentExists = await this.studentsRepository.findOne({
      email
    });
    if (studentExists){
      return studentExists;
    }
    const student = this.studentsRepository.create({
      firstname,
      lastname,
      email,
      phone
    });
    await this.studentsRepository.save(student);
    return student;
    
  }

};

export default StudentsService;