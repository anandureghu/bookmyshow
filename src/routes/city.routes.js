const cityController = require("../controllers/city.controller");

const cityRouter = require("express").Router();

cityRouter.get("/", cityController.GetAllCity);
cityRouter.post("/", cityController.AddNewCity);

module.exports = cityRouter;
