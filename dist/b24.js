"use strict";
// Create an abstract class Appliance with method turnOn(). Implement Fan and AirConditioner.
class Appliance {
}
// Fan class implements Appliance
class Fan extends Appliance {
    turnOn() {
        console.log("The fan is now on.");
    }
}
// AirConditioner class implements Appliance
class AirConditioner extends Appliance {
    turnOn() {
        console.log("The air conditioner is now on.");
    }
}
// test
const fan = new Fan();
fan.turnOn();
const airConditioner = new AirConditioner();
airConditioner.turnOn();
