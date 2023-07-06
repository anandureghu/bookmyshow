require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const config = require("./config/config");
const logger = require("./utils/logger");
const { connectToDB } = require("./utils/connection");
const routers = require("./routes/routes");
const { handleError } = require("./utils/errors");

const app = express();
app.use(bodyParser.json());

try {
  app.use("/api/v1/city", routers.cityRouter);
  app.use("/api/v1/movies", routers.movieRouter);
  app.use("/api/v1/auth", routers.authRouter);
  app.use("/api/v1/theatres", routers.theatreRouter);
} catch (error) {
  handleError(error);
}

const PORT = config.app.port;
app.listen(PORT, () => {
  connectToDB();
  logger.info(`server started listening on port ${PORT}`);
});
