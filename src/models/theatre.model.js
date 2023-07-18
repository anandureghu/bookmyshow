const { DataTypes } = require("sequelize");
const { db } = require("../utils/connection");
const City = require("./city.model");

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
});

City.hasMany(Theatre);

module.exports = Theatre;
