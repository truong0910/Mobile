// Define an interface Animal with name and method sound().
interface Animal {
  name: string;
  sound(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sound(): void {
    console.log(`${this.name} says: Woof!`);
  }
}

class Cat implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sound(): void {
    console.log(`${this.name} says: Meow!`);
  }
}

const dog = new Dog("Buddy");
dog.sound();

const cat = new Cat("Kitty");
cat.sound();
