const authController = require("../controllers/auth.controller");

const authRouter = require("express").Router();

authRouter.post("/login", authController.Login);
authRouter.post("/register", authController.Register);

module.exports = authRouter;
