let movies = [
  { id: 1, title: "Inception", year: 2010 },
  { id: 2, title: "The Dark Knight", year: 2008},
  { id: 3, title: "Interstellar", year: 2014 },
];

let nextId = 4;

module.exports = { movies, getNextId: () => nextId++ };
