var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];

function bacaSemuaBuku(time, books, index) {
  if (index >= books.length || time <= 0) {
    return;
  }

  readBooks(time, books[index], function (sisaWaktu) {
    bacaSemuaBuku(sisaWaktu, books, index + 1);
  });
}

bacaSemuaBuku(10000, books, 0);
