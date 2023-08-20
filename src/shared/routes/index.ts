import { Router } from "express";
import { companiesRouter } from "../../modules/company/infra/http/routes/Companies.routes";

export const routes = Router();

routes.get("/health", (req, res) => {
  return res.json({ message: "ok" });
});

routes.use("/companies", companiesRouter);
