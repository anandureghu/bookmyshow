const { DataTypes } = require("sequelize");
const { db } = require("../utils/connection");
const City = require("./city.model");
const Theatre = require("./theatre.model");
const Studio = require("./studio.model");
const Show = require("./show.model");

const CityTheatre = db.define("CityTheatre", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

CityTheatre.hasMany(City);
CityTheatre.hasMany(Theatre);
CityTheatre.hasMany(Studio);
CityTheatre.belongsTo(Show);

module.exports = CityTheatre;
