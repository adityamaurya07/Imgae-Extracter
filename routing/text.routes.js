const express = require("express");
const router = express.Router();
const controller = require("../controller/text.controller");

router.get("/", (request, response) => {
  response.send("get request");
});
router.post("/", (request, response) => {
  controller.uploadFile(request, response);
});

module.exports = router;
