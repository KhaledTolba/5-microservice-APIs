exports.getApi = function (req, res) {
  let date = new Date();
  let unix = Math.floor(date.getTime());
  res.json({ unix: unix, utc: date.toUTCString() });
};

exports.getSpecificApi = function (req, res) {
  let date = new Date(req.params.date);
  if (date instanceof Date && !isNaN(date)) {
    let unix = Math.floor(date.getTime() / 1000);
    res.json({ unix: unix * 1000, utc: date.toUTCString() });
  } else if (!isNaN(req.params.date)) {
    let d = new Date(Number(req.params.date));
    res.json({ unix: Number(req.params.date), utc: d.toUTCString() });
  } else {
    res.json({ error: "Invalid Date" });
  }
};
