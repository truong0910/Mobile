// 13. Create an abstract class Shape with method area(). Implement Square and Circle.
abstract class Shape {
    abstract area(): number;
}

class Square extends Shape {
    side: number;

    constructor(side: number) {
        super();
        this.side = side;
    }

    area(): number {
        return this.side * this.side;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// test
const square = new Square(5);
console.log(`Area of square: ${square.area()}`);

const circle = new Circle(3);
console.log(`Area of circle: ${circle.area()}`);
