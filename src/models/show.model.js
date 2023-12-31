const { DataTypes } = require("sequelize");
const { db } = require("../utils/connection");
const Theatre = require("./theatre.model");

const Show = db.define("Show", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  showDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  showTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Theatre.hasMany(Show);
Show.belongsTo(Theatre);

module.exports = Show;
