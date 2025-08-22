// Base class Animal
class BaseAnimal {
    speak(): void {
        console.log("The animal makes a sound.");
    }
}

// Dog class overrides speak method
class PolymorphicDog extends BaseAnimal {
    speak(): void {
        console.log("The dog barks.");
    }
}

// Cat class overrides speak method
class PolymorphicCat extends BaseAnimal {
    speak(): void {
        console.log("The cat meows.");
    }
}

// Demonstration of polymorphism
const animals: BaseAnimal[] = [new PolymorphicDog(), new PolymorphicCat(), new BaseAnimal()];
animals.forEach(animal => animal.speak());
