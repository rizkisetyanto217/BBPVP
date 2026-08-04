//tanpa try-catch, program akan langsung berhenti jika ada error
// console.log("Program dimulai");

// let hasil = 10/5;
// console.log(nama); //nama belum di definisikan

// console.log("Program selesai");

//dengan try-catch, program tidak akan berhenti jika ada error
console.log("Program dimulai");

try{
    let hasil = 10/5;
    console.log(nama); //nama belum di definisikan
}catch(error){
    console.log("Terjadi error : ", error.message);
}
console.log("Program selesai");