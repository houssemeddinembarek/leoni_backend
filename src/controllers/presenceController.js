const { Presence } = require("../models/presence");
const { User } = require("../models/user");

const addPresence = async (req, res) => {
  try {
    let newPresence = new Presence(req.body);

    const presenceSaved = await newPresence.save().then((docPresence) => {
      return User.findByIdAndUpdate(
        docPresence.userid,
        { $push: { presences: docPresence._id } },
        { new: true, useFindAndModify: false }
      ).populate("presences");
    });

    // console.log(presenceSaved);

    res.status(201).json(presenceSaved);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const getAllPresence = async (req, res) => {
  try {
    let listPresence = await Presence.find({}).populate("presences");
    res.status(200).json(listPresence);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = {
  addPresence,
  getAllPresence,
};
