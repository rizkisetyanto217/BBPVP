const express = require("express");
const router = express.Router();

const {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movie.controller");
const { verifyToken } = require("../middleware/auth.middleware");

router.get("/", getAllMovies);
router.get("/:id", getMovieById);
router.post("/", verifyToken, createMovie);
router.put("/:id", verifyToken, updateMovie);
router.delete("/:id", verifyToken, deleteMovie);

module.exports = router;
