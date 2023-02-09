const userRouter = require("express").Router();

const {
  addPresence,
  getAllPresence,
} = require("../controllers/presenceController");

userRouter.post("/add", addPresence);
userRouter.get("/all", getAllPresence);

module.exports = userRouter;
