"use strict";
// Create a class Order with list of products. Add method to calculate total price.
class Order {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    calculateTotalPrice() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}
// test
const order = new Order();
order.addProduct({
    name: "Product 1", price: 100,
    getInfo: function () {
        throw new Error("Function not implemented.");
    },
    isExpensive: function () {
        throw new Error("Function not implemented.");
    }
});
order.addProduct({
    name: "Product 2", price: 200,
    getInfo: function () {
        throw new Error("Function not implemented.");
    },
    isExpensive: function () {
        throw new Error("Function not implemented.");
    }
});
console.log(order.calculateTotalPrice()); // 300
