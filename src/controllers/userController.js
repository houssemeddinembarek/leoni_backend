const { User } = require("../models/user");



const createUser = async (req, res) => {

//   try {
//     let newUser = new User(req.body);
//     const userSaved = await newUser.save();
//     res.status(201).json(userSaved);
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }

  try {
      let newUser = new User(req.body);
  
    const userSaved = await newUser.save();
    res.status(201).json(userSaved);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const getAllUsers = async (req,res) =>{
    try {
        let listUsers = await User.find({})
        // .populate('presence')
        res.status(200).json(listUsers)

    } catch (e) {
        res.status(500).json({error:e.message})
    }
}

const getAllPresences = async (req,res) => {
    try {
        let foundUser = await User.find({_id : req.params.id}).populate('presences')
        res.json(foundUser)


    } catch (e) {
        res.status(500).json({error:e.message})
    }
}



module.exports = {
  createUser,
  getAllUsers,
  getAllPresences
};
