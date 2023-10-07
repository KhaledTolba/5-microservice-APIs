const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.MONGO_URI).then((conn) => {
    console.log(`Databse connected: ${conn.connection.host}`);
  });
};

module.exports = dbConnection;