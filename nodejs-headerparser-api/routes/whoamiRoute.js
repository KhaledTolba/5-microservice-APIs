const express = require("express");
const { getwhoami } = require("../services/whoamiServices");

const router = express.Router();

router.route("/").get(getwhoami);

module.exports = router;
