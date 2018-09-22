var db = require("../models");
var ard = require("../arduino/arduino.js"); 


console.log(ard.isLedOn()); 
console.log(ard.isSwitchOn());


var ard = {
  led: ard.isLedOn(),
  switcher: ard.isSwitchOn()
}; 

module.exports = function(app) {
  // Get all examples

app.get("/api/arduino", function(req, res){

  res(ardCom); 

  

}))

app.post("/api/arduino", function(req, res){
  
})

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


