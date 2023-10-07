// init project
const express = require("express");
const app = express();
const homeRoute = require("./routes/homeRoute");
const apiRoute = require("./routes/apiRoute");
const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

// Mount Route
app.use("/", homeRoute);
app.use("/api", apiRoute);

// listen for requests :)
const PORT = process.env.PORT || 3000;
var listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
