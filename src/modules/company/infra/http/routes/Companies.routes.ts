import { Router } from "express";
import { CreateCompanyController } from "../controllers/CreateCompanyController";

export const companiesRouter = Router();
const createCompanyService = new CreateCompanyController();

companiesRouter.post("/", createCompanyService.handle);
