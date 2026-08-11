const express = require("express");
const router = express.Router();
const { movies, getNextId } = require("../data/movies");

// GET all movies
router.get("/", (req, res) => {
  res.json(movies);
});

// GET movie by id
router.get("/:id", (req, res) => {
  const movie = movies.find((m) => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).json({ message: "Movie not found" });
  res.json(movie);
});

// CREATE movie
router.post("/", (req, res) => {
  const { title, year, genre } = req.body;

  if (!title || !year || !genre) {
    return res
      .status(400)
      .json({ message: "title, year, and genre are required" });
  }

  const newMovie = { id: getNextId(), title, year, genre };
  movies.push(newMovie);
  res.status(201).json(newMovie);
});

// UPDATE movie
router.put("/:id", (req, res) => {
  const movie = movies.find((m) => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).json({ message: "Movie not found" });

  const { title, year, genre } = req.body;
  if (title !== undefined) movie.title = title;
  if (year !== undefined) movie.year = year;
  if (genre !== undefined) movie.genre = genre;

  res.json(movie);
});

// DELETE movie
router.delete("/:id", (req, res) => {
  const index = movies.findIndex((m) => m.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Movie not found" });

  const deleted = movies.splice(index, 1);
  res.json({ message: "Movie deleted", data: deleted[0] });
});

module.exports = router;
