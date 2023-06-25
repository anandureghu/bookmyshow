const { DataTypes } = require("sequelize");
const { db } = require("../utils/connection");
const Show = require("./show.model");
const User = require("./user.model");

const Booking = db.define("Booking", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  seat: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  paymentStatus: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  paymentType: {
    type: DataTypes.ENUM,
    values: ["UPI", "DIRECT", "CARD"],
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM,
    values: ["confirmed", "peding", "cancelled"],
  },
});

Booking.hasMany(Show);
Booking.hasMany(User);

module.exports = Booking;
