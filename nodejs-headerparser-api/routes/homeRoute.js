const express = require("express");
const { getHome } = require("../services/homeServices");

const router = express.Router();

router.route("/").get(getHome);

module.exports = router;
