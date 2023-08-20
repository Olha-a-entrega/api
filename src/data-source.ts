import "reflect-metadata";
import { DataSource } from "typeorm";
import "dotenv/config";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: process.env.NODE_ENV === "development" && false,
  logging: true,
  entities: [`${__dirname}/modules/**/infra/typeorm/entities/*.{ts,js}`],
  migrations: [`${__dirname}/database/migrations/*.{ts,js}`],
});
