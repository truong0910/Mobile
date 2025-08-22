// Create a class Rectangle with width and height. Write a method to calculate area and perimeter.

class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }

    Area(): number{
        return this.width * this.height;
    }

    Perimeter(): number{
        return 2 * (this.width + this.height);
    }

    displayInfo(): void {
        console.log(`Rectangle - Width: ${this.width}, Height: ${this.height}, Area: ${this.Area()}, Perimeter: ${this.Perimeter()}`);
    }
}

const test = new Rectangle(5, 10);
test.displayInfo();