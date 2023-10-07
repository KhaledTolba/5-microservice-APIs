exports.getHome = function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
};
