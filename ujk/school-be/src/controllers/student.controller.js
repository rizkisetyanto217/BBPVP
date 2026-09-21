const prisma = require("../lib/prisma");
const { validateStudentInput } = require("../validators/student.validator");

// GET semua students
const getAllStudents = async (req, res) => {
  try {
    const students = await prisma.student.findMany({
      include: { major: true },
    });
    res.status(200).json(students);
  } catch (error) {
    console.error("Error getAllStudents:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET student by id
const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(Number(id))) {
      return res.status(400).json({ message: "ID tidak valid" });
    }

    const student = await prisma.student.findUnique({
      where: { id: Number(id) },
      include: { major: true },
    });

    if (!student) {
      return res.status(404).json({ message: "Siswa tidak ditemukan" });
    }

    res.status(200).json(student);
  } catch (error) {
    console.error("Error getStudentById:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// CREATE student
const createStudent = async (req, res) => {
  try {
    const { kodeSiswa, namaSiswa, alamatSiswa, tglSiswa, majorId } = req.body;

    const errors = validateStudentInput({ kodeSiswa, namaSiswa });
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const student = await prisma.student.create({
      data: {
        kodeSiswa,
        namaSiswa,
        alamatSiswa,
        tglSiswa: tglSiswa ? new Date(tglSiswa) : undefined,
        majorId: majorId ? Number(majorId) : undefined,
      },
    });

    res.status(201).json(student);
  } catch (error) {
    // P2002 = unique constraint (kode siswa udah ada)
    if (error.code === "P2002") {
      return res.status(409).json({ message: "Kode siswa sudah dipakai" });
    }
    // P2003 = majorId yang dikirim gak ada di tabel majors
    if (error.code === "P2003") {
      return res.status(400).json({ message: "Jurusan tidak ditemukan" });
    }
    console.error("Error createStudent:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// UPDATE student
const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(Number(id))) {
      return res.status(400).json({ message: "ID tidak valid" });
    }

    const { kodeSiswa, namaSiswa, alamatSiswa, tglSiswa, majorId } = req.body;

    const errors = validateStudentInput({ kodeSiswa, namaSiswa });
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const student = await prisma.student.update({
      where: { id: Number(id) },
      data: {
        kodeSiswa,
        namaSiswa,
        alamatSiswa,
        tglSiswa: tglSiswa ? new Date(tglSiswa) : undefined,
        majorId: majorId ? Number(majorId) : undefined,
      },
    });

    res.status(200).json(student);
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Siswa tidak ditemukan" });
    }
    if (error.code === "P2002") {
      return res.status(409).json({ message: "Kode siswa sudah dipakai" });
    }
    if (error.code === "P2003") {
      return res.status(400).json({ message: "Jurusan tidak ditemukan" });
    }
    console.error("Error updateStudent:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// DELETE student
const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(Number(id))) {
      return res.status(400).json({ message: "ID tidak valid" });
    }

    await prisma.student.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({ message: "Siswa berhasil dihapus" });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Siswa tidak ditemukan" });
    }
    console.error("Error deleteStudent:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
