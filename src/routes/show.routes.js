const showController = require("../controllers/show.controller");

const showRouter = require("express").Router();

showRouter.get("/", showController.GetAllShows);
showRouter.get("/:showId", showController.GetShow);
showRouter.post("/", showController.CreateShow);
showRouter.put("/:showId", showController.UpdateShow);
showRouter.delete("/:showId", showController.DeleteShow);

module.exports = showRouter;
