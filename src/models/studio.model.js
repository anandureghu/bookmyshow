const { DataTypes } = require("sequelize");
const { db } = require("../utils/connection");

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

module.exports = Studio;
