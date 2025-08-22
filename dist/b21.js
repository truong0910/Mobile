"use strict";
// Create a generic Repository class with methods add(), getAll().
class Repository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
// test
const carRepository = new Repository();
carRepository.add(new VehicleCar());
const allCars = carRepository.getAll();
const bikeRepository = new Repository();
bikeRepository.add(new Bike());
const allBikes = bikeRepository.getAll();
