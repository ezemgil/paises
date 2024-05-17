import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const login = process.env.DB_LOGIN;

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./data/countries.db",
  logging: login === "true" ? console.log : false,
});

export default sequelize;
