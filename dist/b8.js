"use strict";
// Create a Product class with name, price. Create an array of products and filter products with price > 100.
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getInfo() {
        return `Product Name: ${this.name}, Price: ${this.price}`;
    }
    isExpensive() {
        return this.price > 100;
    }
}
const products = [
    new Product("Product A", 150),
    new Product("Product B", 80),
    new Product("Product C", 200),
];
const expensiveProducts = products.filter(product => product.isExpensive());
expensiveProducts.forEach(product => {
    console.log(product.getInfo());
});
