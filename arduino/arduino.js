
var five = require("johnny-five");
var board = new five.Board();
var isLeadOn;

board.on("ready", function () {

    var led = new five.Led(11);
    var rmSwitch = new five.Switch(8);

    rmSwitch.on("open", function () {

        isLeadOn = true;
        //console.log(isLeadOn)

        led.on();
        return isLeadOn;
    })

    rmSwitch.on("close", function () {
        isLeadOn = false;
        led.off();
        // console.log(isLeadOn)
    })

});

module.exports = {
    isLeadOn: function () { return isLeadOn; },
    //isSomethingElse: function() { return true; }
};

