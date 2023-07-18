const httpStatus = require("http-status");
const theatreService = require("../services/theatre.service");
const { InternalServerError, BadRequestError } = require("../utils/errors");
const logger = require("../utils/logger");

const GetAllTheatre = async (req, res) => {
  try {
    theatreService.getAllTheatre().then((data) => {
      res.send(data).status(httpStatus.OK);
    });
  } catch (error) {
    res.send(httpStatus.INTERNAL_SERVER_ERROR).send(new InternalServerError());
  }
};

const AddNewTheatre = async (req, res) => {
  const theatre = req.body;
  theatreService
    .addNewTheatre(theatre)
    .then((data) => {
      res.status(httpStatus.CREATED).send({
        msg: "successfully added new theatre",
        data,
      });
    })
    .catch((error) => {
      logger.error(error.message);
      if (error.original.errno) {
        res
          .status(httpStatus.BAD_REQUEST)
          .send(
            new InternalServerError(
              "provided city not exist, please try with other city",
              httpStatus.BAD_REQUEST
            )
          );
        return;
      }
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(new InternalServerError());
    });
};

const GetAllTheatreInACity = async (req, res) => {
  const cityId = req.params.cityId;
  try {
    theatreService.getTheatresInACity(cityId).then((data) => {
      res.send(data).status(httpStatus.OK);
    });
  } catch (error) {
    res.send(httpStatus.INTERNAL_SERVER_ERROR).send(new InternalServerError());
  }
};

module.exports = {
  GetAllTheatre,
  AddNewTheatre,
  GetAllTheatreInACity,
};
