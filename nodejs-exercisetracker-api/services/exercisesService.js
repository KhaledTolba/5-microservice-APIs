const asyncHandler = require("express-async-handler");
const ExerciseModel = require("../models/exerciseModel");
const UserModel = require("../models/userModel");

exports.getExercises = asyncHandler(async (req, res) => {
  console.log(`GET Log: 
  id:${req.params._id}, 
  limit:${req.query.limit}, 
  from:${req.query.from} , 
  to:${req.query.to}`);
  const limit = req.query.limit || false;
  const from = req.query.from || "1900-01-01";
  const to = req.query.to || "2023-09-01";

  const user = await UserModel.findById(req.params._id);

  let exercises = await ExerciseModel.find({ user: req.params._id })
    .where({ date: { $gte: from, $lt: to } })
    .select("description duration date -_id")
    .limit(limit)
    .lean();

  const newExercises = exercises.map((doc) => {
    doc.date = doc.date.toDateString();
    return doc;
  });

  res.json({
    username: user.username,
    count: newExercises.length,
    _id: user._id,
    log: newExercises,
  });
});

exports.createExercise = asyncHandler(async (req, res) => {
  const date = req.body.date ? req.body.date : undefined;
  const user = await UserModel.findById(req.params._id);

  const newExercise = await ExerciseModel.create({
    user: req.params._id,
    description: req.body.description,
    duration: req.body.duration,
    date: date,
  });

  res.json({
    username: user.username,
    description: newExercise.description,
    duration: newExercise.duration,
    date: newExercise.date.toDateString(),
    _id: newExercise.user,
  });
});
