require("dotenv").config();
const express = require("express");
const app = express();
const homeRoute = require("./routes/homeRoute");
const whoamiRoute = require("./routes/whoamiRoute");

var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

// Mount Route
app.use("/", homeRoute);
app.use("/api/whoami", whoamiRoute);

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
