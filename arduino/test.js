var arduino = require("./arduino.js");

function updateME() {
    console.log(arduino.isLeadOn());
    //console.log(arduino.isSomethingElse());
};

setInterval(function() {
    updateME();
}, 1000);
