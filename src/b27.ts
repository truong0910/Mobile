// 27. Create a class Teacher that extends Person. Add subject attribute and introduce method.

class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    introduce(): void {
        console.log(`Hi, my name is ${this.name}.`);
    }
}

class Teacher extends Person {
    subject: string;

    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }

    introduce(): void {
        console.log(`Hi, my name is ${this.name} and I teach ${this.subject}.`);
    }
}

// test
const person = new Person("Alice");
person.introduce();

const teacher = new Teacher("Bob", "Mathematics");
teacher.introduce();
