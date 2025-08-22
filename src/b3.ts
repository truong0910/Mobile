// Create a class Car with properties brand, model, year. Write a method to show car info.

class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    showInfo(): void {
        console.log(`Car Info: ${this.brand} ${this.model}, Year: ${this.year}`);
    }
}

const car1 = new Car("Toyota", "Corolla", 2020);
car1.showInfo();
