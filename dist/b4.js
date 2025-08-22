"use strict";
// Create a class Rectangle with width and height. Write a method to calculate area and perimeter.
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    Area() {
        return this.width * this.height;
    }
    Perimeter() {
        return 2 * (this.width + this.height);
    }
    displayInfo() {
        console.log(`Rectangle - Width: ${this.width}, Height: ${this.height}, Area: ${this.Area()}, Perimeter: ${this.Perimeter()}`);
    }
}
const test = new Rectangle(5, 10);
test.displayInfo();
