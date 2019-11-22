let Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO

let redLED1 = new Gpio(4, 'out');
let greenLED1 = new Gpio(27, 'out');
//use GPIO pin 23 as input, and 'both' on/off status should be handled
let ir1 = new Gpio(22, 'in', 'both');

let redLED2 = new Gpio(17, 'out');
let greenLED2 = new Gpio(22, 'out');
//use GPIO pin 23 as input, and 'both' on/off status should be handled
let ir2 = new Gpio(24, 'in', 'both');

let loopInterval = setInterval(loop, 1000); //run the loop function every 1 second

ir1.watch(function (err, value) {
    // watch for IR 1 status changes
    redLED1.writeSync(value);
    greenLED1.writeSync(!value);
});

ir2.watch(function (err, value) {
    // watch for IR 2 status changes
    redLED2.writeSync(value);
    greenLED2.writeSync(!value);
});