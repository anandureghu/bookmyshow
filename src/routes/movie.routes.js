const movieController = require("../controllers/movie.controller");

const movieRouter = require("express").Router();

movieRouter.get("/", movieController.GetAllMovies);
movieRouter.get("/:movieId", movieController.GetMovie);
movieRouter.post("/", movieController.CreateMovie);
movieRouter.put("/:movieId", movieController.UpdateMovie);
movieRouter.delete("/:movieId", movieController.DeleteMovie);

module.exports = movieRouter;
