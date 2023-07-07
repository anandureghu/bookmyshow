const Movie = require("../models/movie.model");

const getAllMovies = () => {
  let movies = Movie.findAll();
  return movies;
};

const createMovie = async (movie) => {
  const { name, releaseDate, duration, language, type, certificate, subtitle } =
    movie;
  const newMovie = await Movie.create({
    name,
    releaseDate: new Date(releaseDate),
    duration,
    language: language?.toLowerCase(),
    type: type ? type : "2D",
    certificate,
    subtitle: subtitle?.toLowerCase(),
  });
  return newMovie;
};

const getMovie = () => {};

const updateMovie = () => {};

const deleteMovie = () => {};

module.exports = {
  getAllMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};
