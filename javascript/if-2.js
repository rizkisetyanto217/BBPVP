// 8. Nested If - Studi Kasus Minimarket
let minimarketStatus = "Open";
let telur = "Soldout";
let buah = "SOLDOUT";

if (minimarketStatus.toLowerCase() == "open") {
  console.log("Minimarket Buka");
  console.log("Saya akan membeli telur dan buah");

  if (telur.toLowerCase() == "soldout" && buah.toLowerCase() == "soldout") {
    console.log("Telur dan buah habis");
  } else if (telur.toLowerCase() == "soldout") {
    console.log("Telur habis");
  } else if (buah.toLowerCase() == "soldout") {
    console.log("Buah habis");
  } else {
    console.log("Semua barang tersedia");
  }
} else {
  console.log("Minimarket tutup, saya pulang");
}
