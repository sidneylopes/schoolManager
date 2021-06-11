import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

interface Request {
  email: string;
  password: string;
  username: string;
  fullname: string;
}

interface Response {
  id: number;
  email: string;
  password: string;
  username: string;
  fullname: string;
}

class UsersService {

  private usersRepository: Repository<User>;
  constructor (){
    this.usersRepository = getCustomRepository(UsersRepository)
  }

  async create(email: string, password: string, username: string, fullname: string) {

    const userExists = await this.usersRepository.findOne({
      email
    });
    if (userExists){
      return userExists;
    }
    const user = this.usersRepository.create({
      username,
      fullname,
      email,
      password
    });
    await this.usersRepository.save(user);
    return user;
    
  }

};

export default UsersService;