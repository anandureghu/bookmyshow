const Show = require("../models/show.model");
const Movie = require("../models/movie.model");

const getAllShows = () => {
  let shows = Show.findAll();
  return shows;
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
      showTime: showDate,
      endDate,
      MovieId: movieId,
      TheatreId: theatreId,
    });
    showDate.setDate(showDate.getDate() + 1);
  }
  return true;
};

const getShowsInATheatre = (theatreId, date) => {
  // console.log(new Date(date));
  return Show.findAll({
    where: {
      TheatreId: theatreId,
      showDate: new Date(date),
    },
    include: Movie
  });
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
  getShowsInATheatre,
};
