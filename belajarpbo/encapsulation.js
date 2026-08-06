class Car {
    constructor(carname) {
        this._carname = carname;
    }

    // getter
    get carname() {
        return this._carname;
    }

    // setter
    set carname(newName) {
        this._carname = newName;
    }
}

// instantiate
var newCar = new Car('Pajero');
console.log(newCar.carname);      // getter dipanggil

newCar.carname = 'Pajero Sport';  // setter dipanggil
console.log(newCar.carname);


class Car {
    #carname; // private field

    constructor(carname) {
        this.#carname = carname;
    }

    // getter
    get carname() {
        return this.#carname;
    }

    // setter
    set carname(newName) {
        this.#carname = newName;
    }
}

// instantiate
var newCar = new Car('Pajero');
console.log(newCar.carname);      // getter dipanggil -> akses lewat public interface

newCar.carname = 'Pajero Sport';  // setter dipanggil
console.log(newCar.carname);

// coba akses langsung
console.log(newCar.#carname);     // ❌ Error: Private field '#carname' must be declared in an enclosing class