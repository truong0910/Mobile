"use strict";
class Dog {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log(`${this.name} says: Woof!`);
    }
}
class Cat {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log(`${this.name} says: Meow!`);
    }
}
const dog = new Dog("Buddy");
dog.sound();
const cat = new Cat("Kitty");
cat.sound();
