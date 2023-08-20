import { Router } from "express";
import { CreateCompanyController } from "../controllers/CreateCompanyController";

export const companiesRouter = Router();

const createCompanyController = new CreateCompanyController();

companiesRouter.post("/", createCompanyController.handle);
