// tanggalLahir.js
// Menampilkan tanggal lahir dengan nama bulan menggunakan switch case

// 1. Variabel tanggal lahir (silakan ganti sesuai tanggal lahir Anda)
const tanggal = 17;
const bulan = 8;
const tahun = 1945;

// 2. Tentukan nama bulan menggunakan switch - case
let namaBulan;
switch (bulan) {
  case 1:
    namaBulan = "Januari";
    break;
  case 2:
    namaBulan = "Februari";
    break;
  case 3:
    namaBulan = "Maret";
    break;
  case 4:
    namaBulan = "April";
    break;
  case 5:
    namaBulan = "Mei";
    break;
  case 6:
    namaBulan = "Juni";
    break;
  case 7:
    namaBulan = "Juli";
    break;
  case 8:
    namaBulan = "Agustus";
    break;
  case 9:
    namaBulan = "September";
    break;
  case 10:
    namaBulan = "Oktober";
    break;
  case 11:
    namaBulan = "November";
    break;
  case 12:
    namaBulan = "Desember";
    break;
  default:
    namaBulan = "Bulan tidak valid";
}

// 3. Gabungkan menjadi string dan tampilkan
const hasil = `${tanggal} ${namaBulan} ${tahun}`;
console.log(hasil);
