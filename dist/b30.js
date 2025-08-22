"use strict";
// Create a class School with list of Students and Teachers. Add method to display info.
class Student {
    constructor(name) {
        this.name = name;
    }
}
class SchoolTeacher {
    constructor(name) {
        this.name = name;
    }
}
class School {
    constructor() {
        this.students = [];
        this.teachers = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    displayInfo() {
        console.log("School Information:");
        console.log("Students:");
        this.students.forEach(s => console.log(`- ${s.name}`));
        console.log("Teachers:");
        this.teachers.forEach(t => console.log(`- ${t.name}`));
    }
}
// test
const school = new School();
school.addStudent(new Student("Alice"));
school.addStudent(new Student("Bob"));
school.addTeacher(new SchoolTeacher("Mr. Smith"));
school.addTeacher(new SchoolTeacher("Ms. Johnson"));
school.displayInfo();
