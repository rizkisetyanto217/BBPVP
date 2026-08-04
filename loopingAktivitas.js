// loopingAktivitas.js
// Looping aktivitas di BBPVP Bekasi menggunakan for

for (let i = 1; i <= 20; i++) {
  let keterangan;

  if (i % 3 === 0 && i % 2 !== 0) {
    keterangan = "Mengikuti Uji Kompetensi";
  } else if (i % 3 === 0 && i % 2 === 0) {
    keterangan = "Mendapat Sertifikat";
  } else if (i % 2 !== 0) {
    keterangan = "Apel Pagi";
  } else {
    keterangan = "Mengikuti Pelatihan";
  }

  console.log(`${i} - ${keterangan}`);
}
