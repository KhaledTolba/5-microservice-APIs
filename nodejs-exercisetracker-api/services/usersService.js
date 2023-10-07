const UserModel = require('../models/userModel');


exports.getUsers = async (req, res) => {
  const users = await UserModel.find().select('username');
  res.json(users)
};

exports.createUser = async (req, res) => {
  const newUser = await UserModel.create(req.body);
  
  res.json({ username:newUser.username, _id:newUser._id });
};