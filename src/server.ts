import express from "express";
import { AppDataSource } from "./data-source";
import "dotenv/config";
import "./shared/container";
import { routes } from "./shared/routes";
import cors from "cors";

const PORT = process.env.PORT;

AppDataSource.initialize()
  .then(() => {
    const app = express();

    app.use(cors());

    app.use(express.json());

    app.use(routes);

    app.listen(PORT, () => {
      console.log(`api is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log("error => ", error));
