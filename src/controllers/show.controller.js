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
        msg: "successfully added new show",
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

const GetShow = (req, res) => {};

const UpdateShow = (req, res) => {};

const DeleteShow = (req, res) => {};

module.exports = {
  GetAllShows,
  GetShow,
  CreateShow,
  UpdateShow,
  DeleteShow,
};