const validateStudentInput = ({ kodeSiswa, namaSiswa }) => {
  const errors = [];

  if (!kodeSiswa || kodeSiswa.trim() === "") {
    errors.push("Kode siswa wajib diisi");
  }

  if (!namaSiswa || namaSiswa.trim() === "") {
    errors.push("Nama siswa wajib diisi");
  }

  return errors;
};

module.exports = { validateStudentInput };
