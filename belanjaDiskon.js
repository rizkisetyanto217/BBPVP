// belanjaDiskon.js
// Menghitung total belanja dengan diskon bersyarat

// 1. Harga barang
const headset = 225000;
const mouse = 150000;
const keyboard = 350000;

// 2. Total belanja
const totalBelanja = headset + mouse + keyboard;

// 3. Tentukan persentase diskon berdasarkan total belanja
let persenDiskon = 0;
if (totalBelanja >= 800000) {
  persenDiskon = 15;
} else if (totalBelanja >= 500000) {
  persenDiskon = 10;
} else if (totalBelanja >= 250000) {
  persenDiskon = 5;
} else {
  persenDiskon = 0;
}

// 4. Hitung nilai diskon dan total setelah diskon
const nilaiDiskon = (totalBelanja * persenDiskon) / 100;
const totalSetelahDiskon = totalBelanja - nilaiDiskon;

// 5. Hitung kembalian
const pembayaran = 800000;
const kembalian = pembayaran - totalSetelahDiskon;

// 6. Tampilkan hasil
console.log("===== Rincian Pembelian =====");
console.log(`Headset = Rp. ${headset}`);
console.log(`Mouse = Rp. ${mouse}`);
console.log(`Keyboard = Rp. ${keyboard}`);
console.log("");
console.log(`Total Belanja = Rp. ${totalBelanja}`);
console.log(`Diskon = ${persenDiskon}%`);
console.log(`Total Setelah Diskon = Rp. ${totalSetelahDiskon}`);
console.log(`Pembayaran = Rp. ${pembayaran}`);
console.log(`Kembalian = Rp. ${kembalian}`);
