var five = require("johnny-five");
var board = new five.Board();
var isLedOn;
var isSwitchOn;

isLedOn = true;
isSwitchOn = true;

board.on("ready", function() {
  var led = new five.Led(11);
  var rmSwitch = new five.Switch(8);

  rmSwitch.on("open", function() {
    fnLedOn();

    // isLedOn = true;
    // isSwitchOn = true;
    // //console.log(isLeadOn)

    // led.on();
    // return isLedOn;})
  });

  rmSwitch.on("close", function() {
    fnLedOff();
    // isLedOn = false;
    // led.off();
    // // console.log(isLeadOn)
  });

  if (isSwitchOn === true && isLedOn === false) {
    fnLedOn();
  }

  if (isSwitchOn === false && isLedOn === true) {
    fnLedOff();
  }

  function fnLedOn() {
    led.on();
    isLedOn = true;
  }

  function fnLedOff() {
    led.off();
    isLedOn = false;
  }
});

module.exports = {
  isLedOn: function() {
    return isLedOn;
  },
  isSwitchOn: function() {
    return isSwitchOn;
  }
};
