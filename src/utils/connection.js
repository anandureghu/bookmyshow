const { Sequelize } = require("sequelize");
const config = require("../config/config");
const logger = require("./logger");

const sequelize = new Sequelize({
  host: config.db.host,
  port: config.db.port,
  database: config.db.database,
  username: config.db.user,
  password: config.db.password,
  dialect: "mysql",
});

const connectToDB = () => {
  sequelize
    .authenticate()
    .then(() => {
      logger.info("connected to database");
      sequelize.sync({ alter: true });
    })
    .catch((err) => {
      logger.error("connection to database failed >>> ", err);
    });
};

module.exports = {
  connectToDB,
  db: sequelize,
};
