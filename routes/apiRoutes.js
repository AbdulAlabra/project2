var db = require("../models");
var ard = require("../arduino/arduino.js");

console.log(ard.isLedOn());
console.log(ard.isSwitchOn());

var ardCom = {
  led: ard.isLedOn(),
  switcher: ard.isSwitchOn()
};

module.exports = function(app) {
  // Get all changes
  app.get("/api/arduino", function(req, res) {
    //send updated ardCom.led status
    res(ardCom.switcher);
  });

  app.post("/api/arduino", function(req, res) {
    //send led status
    req.body(ardCom.led);
    //get led status
    res(ardCom.led);
  });

  app.get("/api/examples", function(req, res) {
    db.Users.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Users.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Users.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
