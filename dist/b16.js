"use strict";
// 16. Create a generic class Box that can store any type of value.
class Box {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
}
// test
const box = new Box("Hello, World!");
console.log(box.getValue());
box.setValue("New Value");
console.log(box.getValue());
