const prisma = require("../lib/prisma");
const { validateMajorInput } = require("../validators/major.validator");

// GET semua majors
const getAllMajors = async (req, res) => {
  try {
    const majors = await prisma.major.findMany({
      include: { students: true },
    });
    res.status(200).json(majors);
  } catch (error) {
    console.error("Error getAllMajors:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET major by id
const getMajorById = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(Number(id))) {
      return res.status(400).json({ message: "ID tidak valid" });
    }

    const major = await prisma.major.findUnique({
      where: { id: Number(id) },
      include: { students: true },
    });

    if (!major) {
      return res.status(404).json({ message: "Jurusan tidak ditemukan" });
    }

    res.status(200).json(major);
  } catch (error) {
    console.error("Error getMajorById:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// CREATE major
const createMajor = async (req, res) => {
  try {
    const { kodeJurusan, namaJurusan, schoolId } = req.body;

    const errors = validateMajorInput({ kodeJurusan, namaJurusan });
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const major = await prisma.major.create({
      data: {
        kodeJurusan,
        namaJurusan,
        schoolId: schoolId ? Number(schoolId) : undefined,
      },
    });

    res.status(201).json(major);
  } catch (error) {
    // P2002 = unique constraint (kode jurusan udah ada)
    if (error.code === "P2002") {
      return res.status(409).json({ message: "Kode jurusan sudah dipakai" });
    }
    console.error("Error createMajor:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// UPDATE major
const updateMajor = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(Number(id))) {
      return res.status(400).json({ message: "ID tidak valid" });
    }

    const { kodeJurusan, namaJurusan, schoolId } = req.body;

    const errors = validateMajorInput({ kodeJurusan, namaJurusan });
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const major = await prisma.major.update({
      where: { id: Number(id) },
      data: {
        kodeJurusan,
        namaJurusan,
        schoolId: schoolId ? Number(schoolId) : undefined,
      },
    });

    res.status(200).json(major);
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Jurusan tidak ditemukan" });
    }
    if (error.code === "P2002") {
      return res.status(409).json({ message: "Kode jurusan sudah dipakai" });
    }
    console.error("Error updateMajor:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// DELETE major
const deleteMajor = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(Number(id))) {
      return res.status(400).json({ message: "ID tidak valid" });
    }

    await prisma.major.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({ message: "Jurusan berhasil dihapus" });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Jurusan tidak ditemukan" });
    }
    // P2003 = masih ada student yang pakai major ini
    if (error.code === "P2003") {
      return res.status(409).json({
        message: "Jurusan tidak bisa dihapus karena masih dipakai siswa",
      });
    }
    console.error("Error deleteMajor:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllMajors,
  getMajorById,
  createMajor,
  updateMajor,
  deleteMajor,
};
