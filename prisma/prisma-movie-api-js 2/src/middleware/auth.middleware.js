const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

// Cek header "Authorization: Bearer <token>", verify, terus taruh payload di req.user
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token tidak ditemukan" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // { userId, email, iat, exp }
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token sudah expired" });
    }
    return res.status(401).json({ message: "Token tidak valid" });
  }
};

module.exports = { verifyToken };
