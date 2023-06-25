const { DataTypes } = require("sequelize");
const { db } = require("../utils/connection");
const Movie = require("./movie.model");
const CityTheatre = require("./city-theatre.model");

const Studio = db.define("Studio", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  seats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Studio.belongsTo(CityTheatre);

module.exports = Studio;
