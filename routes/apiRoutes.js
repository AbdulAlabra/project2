var db = require("../models");
var five = require("johnny-five");
module.exports = function (app) {
  app.get("/api/arduino", function (req, res){
  });
  var board = new five.Board();
  board.on("ready", function() {
    var islightOn = undefined;
    console.log("I'm inside ready");
    var led = new five.Led(11);
    var rmSwitch = new five.Switch(8);
    app.post("/api/arduino", function(req, res) {
      console.log("I'm inside api route");
      if (req.body.status === "on") {
        islightOn = true;
        console.log("on web");
        led.on();
        res.send("on");
      } else if (req.body.status === "off") {
        islightOn = false;
        console.log("off web");
        led.off();
        res.send("off");
      }
    });
    rmSwitch.on("open", function() {
      if(islightOn === true) {
        led.off();
      } else {
        led.on();
        islightOn = true;
      }
      console.log("Hardware: Im open");
    });
    rmSwitch.on("close", function() {
      if (islightOn === false) {
        led.on();
      } else {
        led.off();
        islightOn= false;
      }
      console.log("Hardware: Im close");
    });
  });

  app.get("/api/examples", function (req, res) {
    db.Users.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Users.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Users.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};
