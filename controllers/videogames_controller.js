var express = require("express");
require("../models/videogames");

var router = express.Router();

router.get("/", function(req, resp) {
  resp.render("index");
});

module.exports = router;
