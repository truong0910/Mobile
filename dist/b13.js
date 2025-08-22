"use strict";
// 13. Create an abstract class Shape with method area(). Implement Square and Circle.
class Shape {
}
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
// test
const square = new Square(5);
console.log(`Area of square: ${square.area()}`);
const circle = new Circle(3);
console.log(`Area of circle: ${circle.area()}`);
