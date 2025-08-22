"use strict";
// 14. Create a base class Employee. Extend Manager and Developer with specific methods.
class Employee {
    constructor(name) {
        this.name = name;
    }
    work() {
        console.log(`${this.name} is working.`);
    }
}
class Manager extends Employee {
    manage() {
        console.log(`${this.name} is managing the team.`);
    }
}
class Developer extends Employee {
    develop() {
        console.log(`${this.name} is writing code.`);
    }
}
// test
const manager = new Manager("Alice");
manager.work();
manager.manage();
const developer = new Developer("Bob");
developer.work();
developer.develop();
