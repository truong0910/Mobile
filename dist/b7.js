"use strict";
// Write a class User with private property name and getter/setter.
class User {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}
const user = new User("Alice");
console.log(user.name);
user.name = "Bob";
console.log(user.name);
