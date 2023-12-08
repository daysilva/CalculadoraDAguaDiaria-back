import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('teste', 'root', 'ifrn.cn', {
    host: 'postgres-service',
    dialect: 'postgres',
    port: 5432
  });