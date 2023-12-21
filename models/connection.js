import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('bd_develop', 'claudio', 'senha#123', {
    host: 'mysql-nuvem.mysql.database.azure.com',
    dialect: 'mysql',
    port: 3306,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false, // Use apenas se estiver enfrentando problemas de certificado
      },
    },
  });