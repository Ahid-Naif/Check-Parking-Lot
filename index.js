let Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO

let redLED1 = new Gpio(4, 'out');
let greenLED1 = new Gpio(27, 'out');

let redLED2 = new Gpio(17, 'out');
let greenLED2 = new Gpio(22, 'out');

let loopInterval = setInterval(loop, 1000); //run the loop function every 1 second

function loop() {
    if (redLED1.readSync() === 0) { 
        redLED1.writeSync(1);
    } else {
        redLED1.writeSync(0);
    }

    if (greenLED1.readSync() === 0) { 
        greenLED1.writeSync(1);
    } else {
        greenLED1.writeSync(0);
    }

    if (redLED2.readSync() === 0) { 
        redLED2.writeSync(1);
    } else {
        redLED2.writeSync(0);
    }

    if (greenLED2.readSync() === 0) { 
        greenLED2.writeSync(1);
    } else {
        greenLED2.writeSync(0);
    }
}