const City = require("../models/city.model");
const logger = require("../utils/logger");

const getAllCity = async () => {
  let citys = await City.findAll();
  return citys;
};

const getCity = async (id) => {
  const city = await City.findOne({ id });
  return city;
};

const addNewCity = async (city) => {
  const newCity = await City.create({
    name: city.name,
    pin: city.pin,
  });
  return newCity;
};

module.exports = {
  getCity,
  getAllCity,
  addNewCity,
};
