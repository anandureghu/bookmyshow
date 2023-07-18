const theatreController = require("../controllers/theatre.controller");

const theatreRouter = require("express").Router();

theatreRouter.get("/", theatreController.GetAllTheatre);
theatreRouter.post("/", theatreController.AddNewTheatre);
theatreRouter.get("/city/:cityId", theatreController.GetAllTheatreInACity);

module.exports = theatreRouter;
