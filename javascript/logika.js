// 5. Operator Logika
const nilai = 69;
const lulus = nilai >= 75;
const hadir = true;

// AND : harus dua-duanya benar (true)
if (lulus && hadir) {
  console.log("Siswa lulus dan hadir");
}

// OR : salah satu true sudah cukup
if (lulus || hadir) {
  console.log("Siswa dianggap aktif");
}
