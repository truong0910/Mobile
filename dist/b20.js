"use strict";
// Write a Vehicle interface and implement it in Car and Bike classes.
class VehicleCar {
    start() {
        console.log("The car is starting.");
    }
    stop() {
        console.log("The car is stopping.");
    }
}
class Bike {
    start() {
        console.log("The bike is starting.");
    }
    stop() {
        console.log("The bike is stopping.");
    }
}
// test
const myCar = new VehicleCar();
myCar.start();
myCar.stop();
const myBike = new Bike();
myBike.start();
myBike.stop();
