class Car {
    // Membuat property dengan nama brand
    constructor(brand)
    {
        this.brand = brand;
    }
}

// instantiate dari class Car - Objek 1
mobil1 = new Car('Mitsubishi');
console.log(mobil1.brand);

// instantiate dari class Car - Objek 2
mobil2 = new Car('Toyota');
console.log(mobil2.brand);


//Latihan 
// Membuat class dengan nama Peserta (nama, umur dan proglat)

class Peserta {
    constructor(nama, umur, proglat) {
        this.nama = nama;
        this.umur = umur;
        this.proglat = proglat;
    }
}

// instantiate dari class Peserta - Objek 1
peserta1 = new Peserta('Budi', 20, 'Fullstack Developer');
console.log(peserta1.nama);
console.log(peserta1.umur);
console.log(peserta1.proglat);

// instantiate dari class Peserta - Objek 2
peserta2 = new Peserta('Siti', 22, 'Data Scientist');
console.log(peserta2.nama);
console.log(peserta2.umur);
console.log(peserta2.proglat);