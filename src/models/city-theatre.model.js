const { DataTypes } = require("sequelize");
const { db } = require("../utils/connection");
const City = require("./city.model");
const Theatre = require("./theatre.model");
const Studio = require("./studio.model");

const CityTheatre = db.define("CityTheatre", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

// CityTheatre.hasMany(Theatre);
// Theatre.belongsTo(CityTheatre);

// CityTheatre.hasMany(City);
// City.belongsTo(CityTheatre);

CityTheatre.hasMany(Studio);
Studio.belongsTo(CityTheatre);

module.exports = CityTheatre;
