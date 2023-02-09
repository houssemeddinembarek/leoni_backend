const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

var bodyParser = require("body-parser");

const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const port = process.env.PORT || 3001;

app.use(express.json({ extended: false }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const userRouter = require("./routes/userRoutes");
const presenceRouter = require("./routes/presenceRoutes");

app.use("/api/user", userRouter);
app.use("/api/presence", presenceRouter);

const connect = async () => {
  const urlDb = process.env.DB_CONNECT;
  await mongoose.connect(urlDb, { useNewUrlParser: true }, (error, done) => {
    if (error) {
      console.log(error);
    }
    if (done) {
      console.log("connected to the database succesfuly");
    }
  });
};

mongoose.set("strictQuery", false);

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconncted !");
});

mongoose.connection.on("connected", () => {
  console.log("mongoDB connected !");
});

app.listen(port, "0.0.0.0", () => {
  connect();
  console.log("connected to the backend  !");
});
