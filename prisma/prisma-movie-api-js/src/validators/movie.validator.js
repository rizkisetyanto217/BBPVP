function validateMovieInput(data) {
  const errors = [];

  if (!data.title || data.title.trim() === "") {
    errors.push("Title wajib diisi");
  }
  if (!data.releaseYear) {
    errors.push("Year wajib diisi");
  }
  if (!data.categoryId) {
    errors.push("Kategori wajib diisi");
  }

  return errors;
}

module.exports = { validateMovieInput };
