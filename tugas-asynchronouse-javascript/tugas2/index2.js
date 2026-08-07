var readBooksPromise = require("./promise.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

function bacaSemuaBukuPromise(time, books, index) {
  if (index >= books.length) {
    return;
  }

  readBooksPromise(time, books[index])
    .then(function (sisaWaktu) {
      bacaSemuaBukuPromise(sisaWaktu, books, index + 1);
    })
    .catch(function (sisaWaktu) {
      console.log("proses baca buku dihentikan");
    });
}

bacaSemuaBukuPromise(10000, books, 0);
