class Peserta {
  constructor(nama, nilai) {
    this.nama = nama;

    if (nilai > 100) {
      console.log(`${nama} : Nilai tidak valid, melebihi 100`);
      this.nilai = 100;
    } else if (nilai < 0) {
      console.log(`${nama} : Nilai tidak valid, kurang dari 0`);
      this.nilai = 0;
    } else {
      this.nilai = nilai;
    }

    if (this.nilai > 90) {
      this.keterangan = "Sangat Baik";
    } else if (this.nilai >= 80) {
      this.keterangan = "Baik";
    } else if (this.nilai >= 60) {
      this.keterangan = "Kurang";
    } else {
      this.keterangan = "Tidak Lulus";
    }
  }

  cekNilai() {
    console.log(`${this.nama} : ${this.nilai} - ${this.keterangan}`);
  }
}

module.exports = Peserta;
