import { sequelize } from "./connection.js";
import { DataTypes } from "sequelize";


export const Person = sequelize.define('person', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // quantidade de agua que uma pessoa deve beber
    quantAgua: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  });

console.log("sincronizando...");
await Person.sync()