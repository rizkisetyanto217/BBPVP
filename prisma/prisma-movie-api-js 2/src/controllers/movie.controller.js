const prisma = require("../lib/prisma");
const { validateMovieInput } = require("../validators/movie.validator");

// GET semua movies
const getAllMovies = async (req, res) => {
  try {
    const movies = await prisma.movie.findMany({
      include: { category: true, reviews: true },
    });
    res.status(200).json(movies);
  } catch (error) {
    console.error("Error getAllMovies:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET movie by id
const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(Number(id))) {
      return res.status(400).json({ message: "ID tidak valid" });
    }

    const movie = await prisma.movie.findUnique({
      where: { id: Number(id) },
      include: { category: true, reviews: true },
    });

    if (!movie) {
      return res.status(404).json({ message: "Movie tidak ditemukan" });
    }

    res.status(200).json(movie);
  } catch (error) {
    console.error("Error getMovieById:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// CREATE movie
const createMovie = async (req, res) => {
  try {
    const { title, description, releaseYear, categoryId, rating } = req.body;

    const errors = validateMovieInput({ title, releaseYear, categoryId });
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const movie = await prisma.movie.create({
      data: {
        title,
        description,
        releaseYear: Number(releaseYear),
        categoryId: Number(categoryId),
        rating: rating ? Number(rating) : undefined,
      },
    });

    res.status(201).json(movie);
  } catch (error) {
    // P2003 = categoryId yang dikirim gak ada di tabel categories
    if (error.code === "P2003") {
      return res.status(400).json({ message: "Kategori tidak ditemukan" });
    }
    console.error("Error createMovie:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// UPDATE movie
const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(Number(id))) {
      return res.status(400).json({ message: "ID tidak valid" });
    }

    const { title, description, releaseYear, categoryId, rating } = req.body;

    const errors = validateMovieInput({ title, releaseYear, categoryId });
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const movie = await prisma.movie.update({
      where: { id: Number(id) },
      data: {
        title,
        description,
        releaseYear: Number(releaseYear),
        categoryId: Number(categoryId),
        rating: rating ? Number(rating) : undefined,
      },
    });

    res.status(200).json(movie);
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Movie tidak ditemukan" });
    }
    if (error.code === "P2003") {
      return res.status(400).json({ message: "Kategori tidak ditemukan" });
    }
    console.error("Error updateMovie:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// DELETE movie
const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(Number(id))) {
      return res.status(400).json({ message: "ID tidak valid" });
    }

    await prisma.movie.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({ message: "Movie berhasil dihapus" });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Movie tidak ditemukan" });
    }
    if (error.code === "P2003") {
      return res.status(409).json({
        message: "Movie tidak bisa dihapus karena masih punya review terkait",
      });
    }
    console.error("Error deleteMovie:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};
