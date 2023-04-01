const tesseract = require("tesseract.js");
const uploadFile = (request, response) => {
  const fileInfo = request.file;
  const img = fileInfo.destination + "/" + fileInfo.filename;
  console.log(img);
  tesseract
    .recognize(img, "eng", {
      tessedit_char_whitelist: "0123456789",
      logger: (m) => console.log(m),
    })
    .then(({ data: { text } }) => {
      response.json({ text: text });
    });
};

module.exports = {
  uploadFile: uploadFile,
};
