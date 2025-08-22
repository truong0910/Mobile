"use strict";
// 27. Create a class Teacher that extends Person. Add subject attribute and introduce method.
class Person {
    constructor(name) {
        this.name = name;
    }
    introduce() {
        console.log(`Hi, my name is ${this.name}.`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    introduce() {
        console.log(`Hi, my name is ${this.name} and I teach ${this.subject}.`);
    }
}
// test
const person = new Person("Alice");
person.introduce();
const teacher = new Teacher("Bob", "Mathematics");
teacher.introduce();
