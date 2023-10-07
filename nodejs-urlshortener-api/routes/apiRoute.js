const express = require('express');
const { getApi, createApi } = require('../services/apiService');

router = express.Router();

router.route('/').post(createApi);
router.route('/:short_url').get(getApi);

module.exports = router;