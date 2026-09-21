function validateRegisterInput(data) {
  const errors = [];

  if (!data.name || data.name.trim() === "") {
    errors.push("Name wajib diisi");
  }
  if (!data.email || data.email.trim() === "") {
    errors.push("Email wajib diisi");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("Format email tidak valid");
  }
  if (!data.password || data.password.length < 6) {
    errors.push("Password minimal 6 karakter");
  }

  return errors;
}

function validateLoginInput(data) {
  const errors = [];

  if (!data.email || data.email.trim() === "") {
    errors.push("Email wajib diisi");
  }
  if (!data.password || data.password.trim() === "") {
    errors.push("Password wajib diisi");
  }

  return errors;
}

module.exports = { validateRegisterInput, validateLoginInput };
