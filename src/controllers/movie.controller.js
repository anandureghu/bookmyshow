const httpStatus = require("http-status");
const movieService = require("../services/movie.service");
const { InternalServerError } = require("../utils/errors");
const logger = require("../utils/logger");

const GetAllMovies = (req, res) => {
  try {
    movieService.getAllMovies().then((data) => {
      res.send(data).status(httpStatus.OK);
    });
  } catch (error) {
    res.send(httpStatus.INTERNAL_SERVER_ERROR).send(new InternalServerError());
  }
};

const CreateMovie = (req, res) => {
  const movie = req.body;
  movieService
    .createMovie(movie)
    .then((data) => {
      res.status(httpStatus.CREATED).send({
        msg: "successfully added new movie",
        data,
      });
    })
    .catch((error) => {
      logger.error(error.message);
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(new InternalServerError());
    });
};

const GetMovie = (req, res) => {};

const UpdateMovie = (req, res) => {};

const DeleteMovie = (req, res) => {};

module.exports = {
  GetAllMovies,
  GetMovie,
  CreateMovie,
  UpdateMovie,
  DeleteMovie,
};
