// 14. Create a base class Employee. Extend Manager and Developer with specific methods.

class Employee {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    work(): void {
        console.log(`${this.name} is working.`);
    }
}

class Manager extends Employee {
    manage(): void {
        console.log(`${this.name} is managing the team.`);
    }
}

class Developer extends Employee {
    develop(): void {
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
