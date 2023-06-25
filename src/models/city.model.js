const { DataTypes } = require("sequelize");
const { db } = require("../utils/connection");
const CityTheatre = require("./city-theatre.model");

const City = db.define("City", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pin: {
    type: DataTypes.INTEGER,
  },
});

City.belongsTo(CityTheatre);

module.exports = City;
