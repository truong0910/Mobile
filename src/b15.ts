// 15. Create a Library class that can store Book and User objects. Add method to add books.

class LibraryBook {
    title: string;
    author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
}

class LibraryUser {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Library {
    books: LibraryBook[];
    users: LibraryUser[];

    constructor() {
        this.books = [];
        this.users = [];
    }

    addBook(book: LibraryBook): void {
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