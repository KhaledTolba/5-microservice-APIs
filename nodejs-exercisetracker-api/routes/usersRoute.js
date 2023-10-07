const express = require('express');

const { getUsers, createUser } = require('../services/usersService');

const { createExercise, getExercises } = require('../services/exercisesService')

const router = express.Router();

router.route('/').get(getUsers).post(createUser);

router.route('/:_id/exercises').post(createExercise);
router.route('/:_id/logs').get(getExercises);



module.exports = router;