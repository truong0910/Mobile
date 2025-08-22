// Create a Product class with name, price. Create an array of products and filter products with price > 100.

class Product {
    name: string;
    price: number;

    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
    }

    getInfo(): string {
        return `Product Name: ${this.name}, Price: ${this.price}`;
    }

    isExpensive(): boolean {
        return this.price > 100;
    }
}

const products: Product[] = [
    new Product("Product A", 150),
    new Product("Product B", 80),
    new Product("Product C", 200),
];

const expensiveProducts = products.filter(product => product.isExpensive());

expensiveProducts.forEach(product => {
    console.log(product.getInfo());
});


