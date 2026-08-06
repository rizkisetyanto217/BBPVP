// class Car {
//   // Membuat method
//   sound() {
//     return "Vrooommm... Vrooomm";
//   }
// }

// // instantiate
// var mobil1 = new Car();
// console.log(mobil1.sound());



class Car {
    sound(x) {
        return x + " , suara mobil saya: Vrooommm";
    }
}

// instantiate
var mobil1 = new Car();
console.log(mobil1.sound("Haiii"));


class Laptop {
    constructor(merek, baterai) {
        this.merek = merek;
        this.baterai = baterai;
    }

    cekBaterai() {
        if (this.baterai >= 80) {
            console.log(`${this.merek} : baterai penuh ${this.baterai}`);
        }
    }
}

// instantiate
var laptop1 = new Laptop('Asus', 85);
laptop1.cekBaterai();



//Latihan 2
class Peserta {
    constructor(nama, nilai, keterangan) {
        this.nama = nama;
        this.nilai = nilai;
        this.keteranga = keterangan;
    }

    cekNilai() {
        if (this.nilai > 90) {
            console.log(`${this.nama} : ${this.nilai} - Sangat Baik oke lulus` ); ;
        } else if (this.nilai >= 80) {
            console.log(`${this.nama} : ${this.nilai} - Baik`);
        } else if (this.nilai >= 60) {
            console.log(`${this.nama} : ${this.nilai} - Kurang`);
        } else {
            console.log(`${this.nama} : ${this.nilai} - Tidak Lulus`);
        }
    }
}

// instantiate
var peserta1 = new Peserta('Andi', 95);
peserta1.cekNilai();

var peserta2 = new Peserta('Budi', 80);
peserta2.cekNilai();

var peserta3 = new Peserta('Citra', 65);
peserta3.cekNilai();

var peserta4 = new Peserta('Dedi', 50);
peserta4.cekNilai();




class Peserta {
    constructor(nama, nilai, keterangan) {
        this.nama = nama;
        this.nilai = nilai; // ini bakal manggil setter di bawah
        this.keterangan = keterangan;
    }

    // SETTER
    set nilai(value) {
        if (value > 100 || value < 0) {
            console.log(`${this.nama} : Nilai ${value} tidak valid! Harus 0-100`);
            this._nilai = 0; // default kalau invalid, bisa lu sesuaikan
        } else {
            this._nilai = value;
        }
    }

    // GETTER
    get nilai() {
        return this._nilai;
    }

    cekNilai() {
        if (this.nilai > 90) {
            console.log(`${this.nama} : ${this.nilai} - Sangat Baik oke lulus`);
        } else if (this.nilai >= 80) {
            console.log(`${this.nama} : ${this.nilai} - Baik`);
        } else if (this.nilai >= 60) {
            console.log(`${this.nama} : ${this.nilai} - Kurang`);
        } else {
            console.log(`${this.nama} : ${this.nilai} - Tidak Lulus`);
        }
    }
}

// instantiate
var peserta1 = new Peserta('Andi', 95, '-');
peserta1.cekNilai();

var peserta5 = new Peserta('Eko', 150, '-'); // ini bakal ke-trigger setter validasi
peserta5.cekNilai();

var peserta6 = new Peserta('Fani', -10, '-'); // ini juga ke-trigger setter validasi
peserta6.cekNilai();