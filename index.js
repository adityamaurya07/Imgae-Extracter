const express = require("express");
const fs = require("fs");
const server = express();
server.listen(8080);

//routing
const ocrRouting = require("./routing/text.routes");
const multer = require("./middleware/multer.middleware");

server.use(multer);

//middleware route
server.use("/ocr", ocrRouting);

server.get("/", (request, response) => {
  const data = fs.readFileSync("./html/index.html");
  response.status(200);
  response.type("text/html");
  response.send(data);
});
