"use strict";
// Create a class Animal with protected method makeSound(). Extend Dog and Cat to override it.
class Animal2 {
    makeSound() {
        console.log("Some generic animal sound.");
    }
    speak() {
        this.makeSound();
    }
}
class ProtectedDog extends Animal2 {
    makeSound() {
        console.log("Woof! Woof!");
    }
}
class ProtectedCat extends Animal2 {
    makeSound() {
        console.log("Meow! Meow!");
    }
}
// test
const dog2 = new ProtectedDog();
dog2.speak(); // Woof! Woof!
const cat2 = new ProtectedCat();
cat2.speak(); // Meow! Meow!
