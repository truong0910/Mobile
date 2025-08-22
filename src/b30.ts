// Create a class School with list of Students and Teachers. Add method to display info.

class Student {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class SchoolTeacher {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class School {
    students: Student[];
    teachers: SchoolTeacher[];

    constructor() {
        this.students = [];
        this.teachers = [];
    }

    addStudent(student: Student): void {
        this.students.push(student);
    }

    addTeacher(teacher: SchoolTeacher): void {
        this.teachers.push(teacher);
    }

    displayInfo(): void {
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