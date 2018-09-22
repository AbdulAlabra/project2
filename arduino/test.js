var arduino = require("./arduino.js");
console.log(arduino)
function updateME() {
    console.log(arduino.isLedOn());
    //console.log(arduino.isSomethingElse());
};

setInterval(function() {
updateME();
}, 1000);
