"use strict";
// Create a class Book with attributes title, author, year.
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    displayInfo() {
        console.log('Title: ' + this.title);
        console.log('Author: ' + this.author);
        console.log('Year: ' + this.year);
    }
}
const book1 = new Book("2000", "ABC", 2001);
book1.displayInfo();
