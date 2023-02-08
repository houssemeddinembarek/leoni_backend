const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const presencesSchema = new Schema({
  userid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  entrer: {
    type: String,
  },
  sortie: {
    type: String,
  },
  dateJ: {
    type: String,
  },
});

const Presence = mongoose.model("Presence", presencesSchema);
module.exports = { Presence, presencesSchema };
