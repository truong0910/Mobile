"use strict";
class MovableCar {
    move() {
        console.log("The car is moving.");
    }
}
class Robot {
    move() {
        console.log("The robot is moving.");
    }
}
// test
const car = new MovableCar();
car.move();
const robot = new Robot();
robot.move();
