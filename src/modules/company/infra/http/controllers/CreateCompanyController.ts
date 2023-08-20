import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCompanyService } from "../../../services/CompanyService";

export class CreateCompanyController {
  async handle(req: Request, res: Response): Promise<Response> {
    const body = req.body;

    const createCompanyService = container.resolve(CreateCompanyService);

    return res.json("hello world!");
  }
}
