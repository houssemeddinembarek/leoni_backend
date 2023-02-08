const userRouter = require("express").Router();

const { createUser, getAllUsers,getAllPresences } = require("../controllers/userController");

userRouter.post("/add", createUser);
userRouter.get("/all", getAllUsers);
userRouter.get("/:id/presence", getAllPresences);

module.exports = userRouter;
