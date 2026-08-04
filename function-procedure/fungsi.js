// 17. Function - Procedure dengan Date
function tampilkanWaktu() {
    let jam = new Date().getHours();
    let menit = new Date().getMinutes();
    let detik = new Date().getSeconds();
    console.log("Sekarang jam: " + jam + ":" + menit + ":" + detik);
    console.log(`Sekarang jam: ${jam}:${menit}:${detik}`);
}

tampilkanWaktu();