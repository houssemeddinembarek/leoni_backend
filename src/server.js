const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

app.use(express.json());
const port = process.env.PORT || 3001;
























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

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconncted !");
});

mongoose.connection.on("connected", () => {
  console.log("mongoDB connected !");
});

// listen to the server
app.listen(port, "0.0.0.0", () => {
  connect();
  console.log("connected to the backend  !");
});
