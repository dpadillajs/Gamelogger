var express = require("express");
var router = express.Router();
var videogames = require("../models/videogames");

router.get("/", function(req, res) {
  videogames.selectAll(data => {
    res.render("index", { videogames: data });
  });
});

router.post("/api/new", function(req, res) {
  var system = req.body.console;
  var title = req.body.title;

  videogames.insertOne("console", "title", system, title, result => {
    res.json({ id: result.insertId });
  });
});

router.put("/api/new/:id", function(req, res) {
  videogames.updateOne("completed", true, "id", req.params.id, result => {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/new/:id", function(req, res) {
  videogames.delete("id", req.params.id, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
