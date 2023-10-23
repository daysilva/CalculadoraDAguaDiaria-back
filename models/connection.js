import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('teste', 'root', 'ifrn.cn', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5434
  });
