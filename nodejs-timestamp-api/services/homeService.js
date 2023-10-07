exports.getHome = function (req, res) {
  res.sendFile(__dirname.replace("services", "") + "views/index.html");
};
