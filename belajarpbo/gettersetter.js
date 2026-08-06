class Orang {
  #nama; // private field

  constructor(nama) {
    this.#nama = nama;
  }

  // getter
  get nama() {
    return this.#nama;
  }

  // setter
  set nama(namaBaru) {
    if (namaBaru.length < 3) {
      console.log("Nama terlalu pendek!");
    } else {
      this.#nama = namaBaru;
    }
  }
}

// instantiate
const orang1 = new Orang("Budi");
console.log(orang1.nama); // getter dipanggil

orang1.nama = "Al"; // setter dipanggil, tapi kurang dari 3 huruf
console.log(orang1.nama); // nama nggak berubah, masih 'Budi'

orang1.nama = "Siti"; // setter dipanggil, valid
console.log(orang1.nama); // nama berubah jadi 'Siti'
