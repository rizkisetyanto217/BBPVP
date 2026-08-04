// bangunDatar.js
// Menghitung luas dan keliling bangun datar dengan data tetap (tanpa input user)

const PI = 3.14;

// ===== Data tetap =====
const persegi = { sisi: 8 };
const persegiPanjang = { panjang: 9, lebar: 3 };
const lingkaran = { jariJari: 6 };
const segitigaSamaSisi = { alas: 6, tinggi: 4, sisi: 6 };

// ===== 1. Persegi =====
const luasPersegi = persegi.sisi * persegi.sisi;
const kelilingPersegi = 4 * persegi.sisi;

// ===== 2. Persegi Panjang =====
const luasPersegiPanjang = persegiPanjang.panjang * persegiPanjang.lebar;
const kelilingPersegiPanjang =
  2 * (persegiPanjang.panjang + persegiPanjang.lebar);

// ===== 3. Lingkaran =====
const luasLingkaran = parseFloat(
  (PI * lingkaran.jariJari * lingkaran.jariJari).toFixed(2),
);
const kelilingLingkaran = 2 * PI * lingkaran.jariJari;
c
// ===== 4. Segitiga Sama Sisi =====
const luasSegitiga = 0.5 * segitigaSamaSisi.alas * segitigaSamaSisi.tinggi;
const kelilingSegitiga = 3 * segitigaSamaSisi.sisi;

// ===== Tampilkan hasil =====
console.log("===== Persegi =====");
console.log(`Sisi = ${persegi.sisi}`);
console.log(`Luas = ${luasPersegi}`);
console.log(`Keliling = ${kelilingPersegi}`);
console.log("");

console.log("===== Persegi Panjang =====");
console.log(
  `Panjang = ${persegiPanjang.panjang}, Lebar = ${persegiPanjang.lebar}`,
);
console.log(`Luas = ${luasPersegiPanjang}`);
console.log(`Keliling = ${kelilingPersegiPanjang}`);
console.log("");

console.log("===== Lingkaran =====");
console.log(`Jari-jari = ${lingkaran.jariJari}`);
console.log(`Luas = ${luasLingkaran}`);
console.log(`Keliling = ${kelilingLingkaran}`);
console.log("");

console.log("===== Segitiga Sama Sisi =====");
console.log(
  `Alas = ${segitigaSamaSisi.alas}, Tinggi = ${segitigaSamaSisi.tinggi}, Sisi = ${segitigaSamaSisi.sisi}`,
);
console.log(`Luas = ${luasSegitiga}`);
console.log(`Keliling = ${kelilingSegitiga}`);
