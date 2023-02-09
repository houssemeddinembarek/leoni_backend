const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  matricule: {
    type: String,
  },
  nom: {
    type: String,
  },
  prenom: {
    type: String,
  },
  age: {
    type: Number,
  },
  cin: {
    type: String,
  },
  debutTravail: {
    type: String,
  },
  company: {
    type: String,
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "chef segment", "chef ligne", "contromaitre"],
    //name of all posts in leoni exampleq
  },
  ligne: {
    type: Number,
  },
  segment: {
    type: Number,
  },
  groupe: {
    type: String,
  },
  qualification: [
    {
      type: Number,
    },
  ],
  poste: {
    type: Number,
  },
  presences: [
    {
      type: Schema.Types.ObjectId,
      ref: "Presence",
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = { User, userSchema };

