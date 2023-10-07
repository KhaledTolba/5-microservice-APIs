const bodyParser = require("body-parser");
var express = require("express");
var cors = require("cors");

const homeRoute = require("./routes/homeRoute");
const fileAnalyseRoute = require("./routes/fileAnalyseRoute");

require("dotenv").config();

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.use("/", homeRoute);
app.use("/api/fileanalyse", fileAnalyseRoute);

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
