let Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO

let redLED1 = new Gpio(4, 'out');
let greenLED1 = new Gpio(27, 'out');
//use GPIO pin 23 as input, and 'both' on/off status should be handled
let ir1 = new Gpio(14, 'in', 'both');

let redLED2 = new Gpio(17, 'out');
let greenLED2 = new Gpio(22, 'out');
//use GPIO pin 23 as input, and 'both' on/off status should be handled
let ir2 = new Gpio(15, 'in', 'both');

ir1.watch(function (err, value) {
    // watch for IR 1 status changes
    if (value === 1) {
        greenLED1.writeSync(0);
        redLED1.writeSync(1);
    }
    else {
        redLED1.writeSync(0);
        greenLED1.writeSync(1);
    }
});

ir2.watch(function (err, value) {
    // watch for IR 2 status changes
    if (value === 1) {
        greenLED1.writeSync(0);
        redLED1.writeSync(1);
    }
    else {
        redLED1.writeSync(0);
        greenLED1.writeSync(1);
    }
});