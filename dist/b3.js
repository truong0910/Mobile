"use strict";
// Create a class Car with properties brand, model, year. Write a method to show car info.
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    showInfo() {
        console.log(`Car Info: ${this.brand} ${this.model}, Year: ${this.year}`);
    }
}
const car1 = new Car("Toyota", "Corolla", 2020);
car1.showInfo();
