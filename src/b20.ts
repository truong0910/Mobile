// Write a Vehicle interface and implement it in Car and Bike classes.

interface Vehicle {
    start(): void;
    stop(): void;
}

class VehicleCar implements Vehicle {
    start(): void {
        console.log("The car is starting.");
    }

    stop(): void {
        console.log("The car is stopping.");
    }
}

class Bike implements Vehicle {
    start(): void {
        console.log("The bike is starting.");
    }

    stop(): void {
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