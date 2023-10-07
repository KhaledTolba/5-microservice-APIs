const express = require("express");
const { getApi, getSpecificApi } = require("../services/apiServices");

const router = express.Router();

router.route("/").get(getApi);

router.route("/:date").get(getSpecificApi);

module.exports = router;
