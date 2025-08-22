"use strict";
// Create a base class Animal. Extend Dog and Cat classes with methods bark() and meow().
class Animal1 {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}
class Dog1 extends Animal1 {
    bark() {
        console.log(`${this.name} barks.`);
    }
}
class Cat1 extends Animal1 {
    meow() {
        console.log(`${this.name} meows.`);
    }
}
// test
const dog1 = new Dog1("Buddy");
dog1.speak();
dog1.bark();
const cat1 = new Cat1("Whiskers");
cat1.speak();
cat1.meow();
