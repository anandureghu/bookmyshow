const { DataTypes } = require("sequelize");
const { db } = require("../utils/connection");
const CityTheatre = require("./city-theatre.model");
const Studio = require("./studio.model");

const Theatre = db.define("Theatre", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Theatre.belongsTo(CityTheatre);

module.exports = Theatre;
