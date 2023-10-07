require('dotenv').config({ path: "config.env" });

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConnection = require("./config/database");
const homeRoute = require('./routes/homeRoute');
const usersRoute = require('./routes/usersRoute');

const app = express();

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


//connect database
dbConnection();

app.use(cors());
app.use(express.static('public'));

// Route Mount
app.use('/', homeRoute);
app.use('/api/users', usersRoute);




const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
