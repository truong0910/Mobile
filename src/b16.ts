// 16. Create a generic class Box that can store any type of value.
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }

    setValue(value: T): void {
        this.value = value;
    }
}

// test
const box = new Box<string>("Hello, World!");
console.log(box.getValue()); 
box.setValue("New Value");
console.log(box.getValue()); 
