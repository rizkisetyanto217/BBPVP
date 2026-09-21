require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const studentRoutes = require("./routes/student.routes");
const majorRoutes = require("./routes/major.routes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // default: allow semua origin, cocok buat development
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/students", studentRoutes);
app.use("/majors", majorRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("API jalan bang 🚀");
});

app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
