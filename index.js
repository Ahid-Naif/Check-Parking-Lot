const post = require('./sendHttpRequest.js');

let Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO

let redLED1 = new Gpio(4, 'out');
let greenLED1 = new Gpio(27, 'out');
//use GPIO pin 23 as input
let ir1 = new Gpio(14, 'in');

let redLED2 = new Gpio(17, 'out');
let greenLED2 = new Gpio(22, 'out');
//use GPIO pin 23 as input
let ir2 = new Gpio(15, 'in');

let parking_status = {
    parkingFirst: "",
    parkingSecond: ""
};

let loopInterval = setInterval(loop, 3000); // run loop function every 3 seconds

function loop() {
    let ir1_value = ir1.readSync();
    if (ir1_value === 1) {
        parking_status.parkingFirst = "available";
        redLED1.writeSync(0);
        greenLED1.writeSync(1);
    }
    else {
        parking_status.parkingFirst = "not_available";
        greenLED1.writeSync(0);
        redLED1.writeSync(1);
    }

    let ir2_value = ir2.readSync();
    if (ir2_value === 1) {
        parking_status.parkingSecond = "available";
        redLED2.writeSync(0);
        greenLED2.writeSync(1);
    }
    else {
        parking_status.parkingSecond = "not_available";
        greenLED2.writeSync(0);
        redLED2.writeSync(1);
    }

    post(parking_status);
}