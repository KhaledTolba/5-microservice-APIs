require('dotenv').config({ path: "config.env" });

const express = require('express');
const cors = require('cors');
const app = express();
const homeRoute = require('./routes/homeRoute');
const apiRoute = require('./routes/apiRoute');
const dbConnection = require("./config/database");
const bodyParser = require('body-parser');


// Basic Configuration
const port = process.env.PORT || 3000;


//connect database
dbConnection();

app.use((req, res, next) => {
  const contentType = req.get("Content-Type");

  if (contentType === "application/json") {
    bodyParser.json()(req, res, next);
  } else if (contentType === "application/x-www-form-urlencoded") {
    bodyParser.urlencoded({ extended: false })(req, res, next);
  } else {
    next();
  }
});

app.use('/public', express.static(`${process.cwd()}/public`));

app.use(cors());

// Mount Route
app.use('/', homeRoute);
app.use('/api/shorturl', apiRoute);


app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
