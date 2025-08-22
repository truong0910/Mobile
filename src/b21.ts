// Create a generic Repository class with methods add(), getAll().
class Repository<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }
}

// test
const carRepository = new Repository<VehicleCar>();
carRepository.add(new VehicleCar());
const allCars = carRepository.getAll();

const bikeRepository = new Repository<Bike>();
bikeRepository.add(new Bike());
const allBikes = bikeRepository.getAll();
