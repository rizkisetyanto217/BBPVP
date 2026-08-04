let jumlah = 0;

console.log("Bilangan genap dari 1 hingga 20:");

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
    jumlah += i;
  }
}

console.log("Jumlah semua bilangan genap tersebut adalah:", jumlah);
