import { DataTypes } from "sequelize";
import sequelize from "../data/db.js";

const Countries = sequelize.define(
  "countries",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    iso3: {
      type: DataTypes.TEXT(3),
      allowNull: false,
      unique: true,
    },
    iso2: {
      type: DataTypes.TEXT(2),
      allowNull: false,
      unique: true,
    },
    currency: {
      type: DataTypes.TEXT(3),
      allowNull: false,
    },
    latitude: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.REAL,
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default Countries;
