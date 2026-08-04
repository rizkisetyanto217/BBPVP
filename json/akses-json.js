const fs = require('fs');
//fs : module bawaan dari Node.js
//fungsi fs : membaca, menulis, dan mengelola file

//Membuka & membaca file JSON(data.json)
//utf-8 : membaca file sebagai teks biasa
const teks = fs.readFileSync("data.json", "utf-8");

//mengubah teks JSON menjadi
const data = JSON.parse(teks);

//menampilkan isi awal dari data.json ke console
console.log("Isi Awal : ", data);

//Menambah data baru ke array data
data.push({id: 1, nama: "Jeanny", usia: 34});

// Menyimpan hasil ke file tampil.json
fs.writeFileSync("tampil.json",
JSON.stringify(data, null, 2));

console.log("Data berhasil ditambahkan ke tampil.json");