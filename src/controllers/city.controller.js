const httpStatus = require("http-status");
const cityService = require("../services/city.service");
const { InternalServerError } = require("../utils/errors");

const GetAllCity = async (req, res) => {
  try {
    cityService.getAllCity().then((data) => {
      res.send(data).status(httpStatus.OK);
    });
  } catch (error) {
    res.send(httpStatus.INTERNAL_SERVER_ERROR).send(new InternalServerError());
  }
};

const AddNewCity = async (req, res) => {
  const city = req.body;
  try {
    cityService.addNewCity(city).then((data) => {
      res.status(httpStatus.CREATED).send({
        msg: "successfully added new city",
        data,
      });
    });
  } catch (error) {
    res.send(httpStatus.INTERNAL_SERVER_ERROR).send(new InternalServerError());
  }
};

module.exports = {
  GetAllCity,
  AddNewCity,
};
