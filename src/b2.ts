// 2. Write a class Student extending Person with an additional attribute grade. Add a method to
// display all info.
import { Person } from './b1'

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    displayInfo(): void {
        super.displayInfo();
        console.log(`Grade: ${this.grade}`);
    }
}   

const s1 = new Student("Alice", 20, "A");
s1.displayInfo();