//menambah elemen di akhir
console.log("menambah elemen di akhir");
let buah = ["apel", "jeruk", "mangga"];
buah.push("pisang", "anggur");
console.log(buah);
console.log("");

//menghapus elemen di akhir
console.log("menghapus elemen di akhir");
let buah1 = ["apel", "jeruk", "mangga"];
buah1.pop();
console.log(buah1);
console.log("");

//menambah elemen di awal
console.log("menambah elemen di awal");
buah1.unshift("durian");
console.log(buah1);
console.log("");

//menghapus elemen di awal
console.log("menghapus elemen di awal");
let buah3 = ["durian", "apel", "jeruk", "mangga"];
buah3.shift();
console.log(buah3);
console.log("");

//menambah elemen di posisi tertentu
console.log("menambah elemen di posisi tertentu");
let angka = [1, 2, 4, 5];
angka.splice(2, 0, 3);
console.log(angka);
console.log("");

//menghapus elemen di posisi tertentu
console.log("menghapus elemen di posisi tertentu");
let angka1 = [1, 2, 3, 4, 5];
angka1.splice(2, 1);
console.log(angka1);
console.log("");

//mengambil sebagian array
console.log("mengambil sebagian array");
let angka3 = [1, 2, 3, 4, 5];
let potong = angka3.slice(1, 2);
console.log(potong);
console.log("");
