const Theatre = require("../models/theatre.model");

const getAllTheatre = async () => {
  let theatres = await Theatre.findAll();
  return theatres;
};

const getTheatre = async (id) => {
  const theatre = await Theatre.findOne({ id });
  return theatre;
};

const addNewTheatre = async (theatre) => {
  const newTheatre = await Theatre.create({
    name: theatre.name,
    CityId: theatre.cityId,
  });
  return newTheatre;
};

module.exports = {
  getTheatre,
  getAllTheatre,
  addNewTheatre,
};
