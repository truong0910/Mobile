"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 2. Write a class Student extending Person with an additional attribute grade. Add a method to
// display all info.
const b1_1 = require("./b1");
class Student extends b1_1.Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Grade: ${this.grade}`);
    }
}
const s1 = new Student("Alice", 20, "A");
s1.displayInfo();
