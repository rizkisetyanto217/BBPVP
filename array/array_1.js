//Array 1 dimensi
console.log("Array 1 Dimensi");
let buah = ["apel", "jeruk", "mangga", "pir"];

//menampilkan data array
console.log(buah[0]);
console.log("");
console.log(buah.length);

//Array Object
console.log("Array Object");
let mobil = [
    {merk: "BMW", warna: "merah", tipe: "sedan"},
    {merk: "Toyota", warna: "hitam", tipe: "suv"},
    {merk: "Audi", warna: "biru", tipe: "suv"}
];

//menampilkan data array object
console.log(mobil[0]);
console.log(mobil[0].merk);
console.log("");

//Foreach Array
console.log("Foreach Array");
buah.forEach(function(elemen, index){
    console.log("Index ke - " + index + ": " + elemen);
});
console.log("");

//Foreach Array Object
console.log("Foreach Array Object");
mobil.forEach(function(item, index){
    console.log(`Mobil ke - ${index + 1}:`);
    console.log(`Merk : ${item.merk}`);
    console.log("Warna : ", item.warna);
    console.log("Tipe : " + item.tipe);
});
console.log("");

console.log("Array Map");
//array baru
let arrayWarna = mobil.map(function(item){
    return item.warna;
});

console.log(arrayWarna);
console.log("");