const express = require("express");
const {
  uploadFileAnalyse,
  uploads,
} = require("../services/fileAnalyseService");

const router = express.Router();

router.route("/").post(uploads, uploadFileAnalyse);

module.exports = router;
