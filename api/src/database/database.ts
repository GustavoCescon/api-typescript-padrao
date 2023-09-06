import "dotenv";
import { Options } from "sequelize";
const { DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST, DB_DIALECT, DB_PORT } =
  process.env;
const config: Options = {
  username: "postgres",
  password: "dtc@2016",
  database: "bdCartaServico",
  host: "10.1.1.70",
  port: 5432,
  dialect: "postgres",
};

export = config;
