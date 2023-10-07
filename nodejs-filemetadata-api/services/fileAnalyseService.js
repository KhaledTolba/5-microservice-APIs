const multer = require("multer");

const upload = multer({ dest: "uploads/" });

exports.uploads = upload.single("upfile");

exports.uploadFileAnalyse = function (req, res) {
  let name = req.file.originalname;
  let type = req.file.mimetype;
  let size = req.file.size;
  res.json({ name: name, type: type, size: size });
};
