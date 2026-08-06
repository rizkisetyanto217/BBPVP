class Car {
    constructor(brand) {
        this.brand = brand;
    }

    info() {
        console.log(`Car brand: ${this.brand}`);
    }
}

module.exports = Car;