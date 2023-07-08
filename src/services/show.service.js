const Show = require("../models/show.model");

const getAllShows = () => {
  let Shows = Show.findAll();
  return Shows;
};

const createShow = async (show) => {
  let { price, movieId, theatreId, startDate, endDate } = show;
  startDate = new Date(startDate);
  endDate = new Date(endDate);
  let showDate = new Date(startDate);
  
  // create shows from start date to end date
  while (showDate <= endDate) {
    await Show.create({
      price: parseFloat(price),
      showDate,
      endDate,
      MovieId: movieId,
      TheatreId: theatreId,
    });
    showDate.setDate(showDate.getDate() + 1);
  }
  return true;
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
