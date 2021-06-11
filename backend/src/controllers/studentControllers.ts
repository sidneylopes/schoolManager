import { Request, Response } from "express";
import StudentsService from "../services/StudentsService";

export const store = async (req: Request, res: Response) => {

  const { email, phone, firstname, lastname } = req.body;

  const studentsService = new StudentsService();
  const student = await studentsService.create(
    email,
    phone,
    firstname,
    lastname
  );

  return res.status(200).json(student);

};
export const index = async (req: Request, res: Response) => {
  
};