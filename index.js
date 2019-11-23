const post1  = require('./sendHttpRequest.js');
const post2  = require('./sendHttpRequest.js');

let Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO

let redLED1 = new Gpio(4, 'out');
let greenLED1 = new Gpio(27, 'out');
//use GPIO pin 23 as input, and 'both' on/off status should be handled
let ir1 = new Gpio(14, 'in', 'both');

let redLED2 = new Gpio(17, 'out');
let greenLED2 = new Gpio(22, 'out');
//use GPIO pin 23 as input, and 'both' on/off status should be handled
let ir2 = new Gpio(15, 'in', 'both');

let availablity = "";
let parking_status = {
    availablity  : "",
};

let ir1_initial = ir1.readSync();
if (ir1_initial === 1) {
    parkingFirst = "available";
    redLED1.writeSync(0);
    greenLED1.writeSync(1);
}
else {
    parkingFirst = "not_available";
    greenLED1.writeSync(0);
    redLED1.writeSync(1);
}

let ir2_initial = ir2.readSync();
if (ir2_initial === 1) {
    parkingSecond = "available";
    redLED2.writeSync(0);
    greenLED2.writeSync(1);
}
else {
    parkingSecond = "not_available";
    greenLED2.writeSync(0);
    redLED2.writeSync(1);
}

ir1.watch(function (err, value) {
    // watch for IR 1 status changes
    if (value === 1) {
        parkingFirst = "available";
        redLED1.writeSync(0);
        greenLED1.writeSync(1);
    }
    else {
        parkingFirst = "not_available";
        greenLED1.writeSync(0);
        redLED1.writeSync(1);
    }
    parking_status.parkingFirst = parkingFirst;
    parking_status.parkingSecond = parkingSecond;
    post1(parking_status);
});

ir2.watch(function (err, value) {
    // watch for IR 2 status changes
    if (value === 1) {
        parkingSecond = "available";
        redLED2.writeSync(0);
        greenLED2.writeSync(1);
    }
    else {
        parkingSecond = "not_available";
        greenLED2.writeSync(0);
        redLED2.writeSync(1);
    }
    parking_status.parkingFirst = parkingFirst;
    parking_status.parkingSecond = parkingSecond;
    post2(parking_status);
});