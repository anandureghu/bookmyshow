const { DataTypes } = require("sequelize");
const { db } = require("../utils/connection");
const Show = require("./show.model");

const Movie = db.define("Movie", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  releaseDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  duration: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  language: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM,
    values: ["2D", "3D"],
  },
  certificate: {
    type: DataTypes.ENUM,
    values: ["U", "A", "U/A", "S"],
  },
  subtitle: {
    type: DataTypes.STRING,
  },
});

Movie.hasMany(Show);
Show.belongsTo(Movie);

module.exports = Movie;
