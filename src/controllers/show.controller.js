const httpStatus = require("http-status");
const showService = require("../services/show.service");
const { InternalServerError } = require("../utils/errors");
const logger = require("../utils/logger");

const GetAllShows = (req, res) => {
  try {
    showService.getAllShows().then((data) => {
      res.send(data).status(httpStatus.OK);
    });
  } catch (error) {
    res.send(httpStatus.INTERNAL_SERVER_ERROR).send(new InternalServerError());
  }
};

const CreateShow = (req, res) => {
  const show = req.body;
  showService
    .createShow(show)
    .then((data) => {
      res.status(httpStatus.CREATED).send({
        msg: "successfully added new shows",
      });
    })
    .catch((error) => {
      logger.error(error.message);
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(new InternalServerError());
    });
};

const GetAllShowInATheatre = (req, res) => {
  const theatreId = req.params.theatreId;
  const date = req.query.date;
  try {
    showService.getShowsInATheatre(theatreId, date).then((data) => {
      res.send(data).status(httpStatus.OK);
    });
  } catch (error) {
    logger.error(error);
    res.send(httpStatus.INTERNAL_SERVER_ERROR).send(new InternalServerError());
  }
};

const GetShow = (req, res) => {};

const UpdateShow = (req, res) => {};

const DeleteShow = (req, res) => {};

module.exports = {
  GetAllShows,
  GetShow,
  CreateShow,
  UpdateShow,
  DeleteShow,
  GetAllShowInATheatre,
};
