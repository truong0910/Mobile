// Create a class Order with list of products. Add method to calculate total price.

interface Product {
    name: string;
    price: number;
}

class Order {
    private products: Product[];

    constructor() {
        this.products = [];
    }

    addProduct(product: Product): void {
        this.products.push(product);
    }

    calculateTotalPrice(): number {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}

// test
const order = new Order();
order.addProduct({
    name: "Product 1", price: 100,
    getInfo: function (): string {
        throw new Error("Function not implemented.");
    },
    isExpensive: function (): boolean {
        throw new Error("Function not implemented.");
    }
});
order.addProduct({
    name: "Product 2", price: 200,
    getInfo: function (): string {
        throw new Error("Function not implemented.");
    },
    isExpensive: function (): boolean {
        throw new Error("Function not implemented.");
    }
});
console.log(order.calculateTotalPrice()); // 300