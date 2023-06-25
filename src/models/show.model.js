const { DataTypes } = require("sequelize");
const { db } = require("../utils/connection");
const CityTheatre = require("./city-theatre.model");
const Movie = require("./movie.model");

const Show = db.define("Show", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  showDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  showTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Show.hasMany(CityTheatre);
Show.hasMany(Movie);

module.exports = Show;