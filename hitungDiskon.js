// hitungDiskon.js
// Menghitung total makanan, diskon, dan kembalian

// 1. Harga makanan
const hargaNasiGoreng = 25000;
const hargaMieGoreng = 22000;
const hargaCapCay = 32000;

// 2. Total harga sebelum diskon
const hargaTotal = hargaNasiGoreng + hargaMieGoreng + hargaCapCay;

// 3. Diskon 10%
const persenDiskon = 10;
const potonganDiskon = (hargaTotal * persenDiskon) / 100;

// 4. Harga setelah diskon
const hargaSetelahDiskon = hargaTotal - potonganDiskon;

// 5. Pembayaran dan kembalian
const pembayaran = 100000;
const kembalian = pembayaran - hargaSetelahDiskon;

// 6. Tampilkan hasil
console.log(`Harga Nasi Goreng = Rp. ${hargaNasiGoreng}`);
console.log(`Harga Mie Goreng = Rp. ${hargaMieGoreng}`);
console.log(`Harga CapCay = Rp. ${hargaCapCay}`);
console.log(`Harga Total = Rp. ${hargaTotal}`);
console.log(`Diskon = ${persenDiskon}%`);
console.log(`Harga Setelah Diskon = Rp. ${hargaSetelahDiskon}`);
console.log(`Pembayaran = Rp. ${pembayaran}`);
console.log(`Kembalian = Rp. ${kembalian}`);
