const movieController = require("../controllers/movie.controller");

const movieRouter = require("express").Router();

movieRouter.get("/", movieController.GetAllMovies);

module.exports = movieRouter;
