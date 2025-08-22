//Create an interface Movable with method move(). Implement it in Car and Robot.
interface Movable {
    move(): void;
}

class MovableCar implements Movable {
    move(): void {
        console.log("The car is moving.");
    }
}

class Robot implements Movable {
    move(): void {
        console.log("The robot is moving.");
    }
}

// test
const car = new MovableCar();
car.move(); 

const robot = new Robot();
robot.move(); 
