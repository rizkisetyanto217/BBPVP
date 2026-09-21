const prisma = require("../lib/prisma");
const { validateCategoryInput } = require("../validators/category.validator");

// GET semua categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      include: { movies: true },
    });
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error getAllCategories:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET category by id
const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(Number(id))) {
      return res.status(400).json({ message: "ID tidak valid" });
    }

    const category = await prisma.category.findUnique({
      where: { id: Number(id) },
      include: { movies: true },
    });

    if (!category) {
      return res.status(404).json({ message: "Kategori tidak ditemukan" });
    }

    res.status(200).json(category);
  } catch (error) {
    console.error("Error getCategoryById:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// CREATE category
const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const errors = validateCategoryInput({ name });
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const category = await prisma.category.create({
      data: { name },
    });

    res.status(201).json(category);
  } catch (error) {
    // P2002 = unique constraint (nama kategori udah ada)
    if (error.code === "P2002") {
      return res.status(409).json({ message: "Nama kategori sudah dipakai" });
    }
    console.error("Error createCategory:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// UPDATE category
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(Number(id))) {
      return res.status(400).json({ message: "ID tidak valid" });
    }

    const { name } = req.body;

    const errors = validateCategoryInput({ name });
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const category = await prisma.category.update({
      where: { id: Number(id) },
      data: { name },
    });

    res.status(200).json(category);
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Kategori tidak ditemukan" });
    }
    if (error.code === "P2002") {
      return res.status(409).json({ message: "Nama kategori sudah dipakai" });
    }
    console.error("Error updateCategory:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// DELETE category
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(Number(id))) {
      return res.status(400).json({ message: "ID tidak valid" });
    }

    await prisma.category.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({ message: "Kategori berhasil dihapus" });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Kategori tidak ditemukan" });
    }
    // P2003 = masih ada movie yang pakai category ini
    if (error.code === "P2003") {
      return res.status(409).json({
        message: "Kategori tidak bisa dihapus karena masih dipakai movie",
      });
    }
    console.error("Error deleteCategory:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
