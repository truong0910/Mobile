// Write a class User with private property name and getter/setter.

class User {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }
}

const user = new User("Alice");
console.log(user.name);
user.name = "Bob";
console.log(user.name);