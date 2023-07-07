const Show = require("../models/show.model");

const getAllShows = () => {
  let Shows = Show.findAll();
  return Shows;
};

const createShow = async (show) => {
  const { datetime, price, movieId, theatreId } = show;
  const newShow = await Show.create({
    showDateTime: new Date(datetime),
    price: parseFloat(price),
    MovieId: movieId,
    TheatreId: theatreId,
  });
  return newShow;
};

const getShow = () => {};

const updateShow = () => {};

const deleteShow = () => {};

module.exports = {
  getAllShows,
  getShow,
  createShow,
  updateShow,
  deleteShow,
};
