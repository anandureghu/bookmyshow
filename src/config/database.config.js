const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env;
module.exports = {
  host: DB_HOST || "localhost",
  port: DB_PORT || "3306",
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASS,
};
