const multer = require("multer");
const crypto = require("crypto");
const unique = crypto.randomBytes(5).toString("hex");

const storage = multer.diskStorage({
  destination: (request, fileInfo, callback) => {
    callback(null, "storage/image");
  },
  filename: (request, fileInfo, callback) => {
    callback(null, unique + ".png");
  },
});

const multipart = multer({
  storage: storage,
}).single("image");

module.exports = multipart;
