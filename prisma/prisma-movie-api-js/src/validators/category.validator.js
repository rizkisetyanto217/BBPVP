function validateCategoryInput(data) {
  const errors = [];

  if (!data.name || data.name.trim() === "") {
    errors.push("Nama kategori wajib diisi");
  }

  return errors;
}

module.exports = { validateCategoryInput };
