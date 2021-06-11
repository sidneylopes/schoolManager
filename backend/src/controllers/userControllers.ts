import { Request, Response } from "express";
import UsersService from "../services/UsersService";

export const store = async (req: Request, res: Response) => {

  const { email, password, username, fullname } = req.body;

  const usersService = new UsersService();
  const user = await usersService.create(
    email,
    password,
    username,
    fullname
  );

  return res.status(200).json(user);

}
export const index = async (req: Request, res: Response) => {
  
    return res.json({
      message: "menor que 5"
    });
  
}