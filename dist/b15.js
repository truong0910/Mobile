"use strict";
// 15. Create a Library class that can store Book and User objects. Add method to add books.
class LibraryBook {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
class LibraryUser {
    constructor(name) {
        this.name = name;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Book titled "${book.title}" by ${book.author} added to the library.`);
    }
}
// test
const library = new Library();
const book = new LibraryBook("1984", "George Orwell");
const book2 = new LibraryBook("To Kill a Mockingbird", "Harper Lee");
library.addBook(book);
library.addBook(book2);
