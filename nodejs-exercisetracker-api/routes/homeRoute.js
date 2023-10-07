const express = require('express');
const { getHome } = require('../services/homeService');

const router = express.Router();

router.route('/').get(getHome);

module.exports = router;
