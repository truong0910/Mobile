"use strict";
// Define interfaces Flyable and Swimmable. Implement them in Bird and Fish classes.
class Bird {
    fly() {
        console.log("The bird is flying.");
    }
}
class Fish {
    swim() {
        console.log("The fish is swimming.");
    }
}
// test
const bird = new Bird();
bird.fly();
const fish = new Fish();
fish.swim();
