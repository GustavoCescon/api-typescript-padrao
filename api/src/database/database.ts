import "dotenv";
import { Options } from "sequelize";
const { DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST, DB_DIALECT, DB_PORT } =
  process.env;
const config: Options = {
  username: "",
  password: "",
  database: "",
  host: "",
  port: 0,
  dialect: "",
};

export = config;
