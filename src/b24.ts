// Create an abstract class Appliance with method turnOn(). Implement Fan and AirConditioner.

abstract class Appliance {
    abstract turnOn(): void;
}

// Fan class implements Appliance
class Fan extends Appliance {
    turnOn(): void {
        console.log("The fan is now on.");
    }
}

// AirConditioner class implements Appliance
class AirConditioner extends Appliance {
    turnOn(): void {
        console.log("The air conditioner is now on.");
    }
}

// test
const fan = new Fan();
fan.turnOn();

const airConditioner = new AirConditioner();
airConditioner.turnOn();
