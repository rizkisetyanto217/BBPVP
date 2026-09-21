const validateMajorInput = ({ kodeJurusan, namaJurusan }) => {
  const errors = [];

  if (!kodeJurusan || kodeJurusan.trim() === "") {
    errors.push("Kode jurusan wajib diisi");
  }

  if (!namaJurusan || namaJurusan.trim() === "") {
    errors.push("Nama jurusan wajib diisi");
  }

  return errors;
};

module.exports = { validateMajorInput };
