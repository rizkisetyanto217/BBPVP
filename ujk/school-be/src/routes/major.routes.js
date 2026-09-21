const express = require("express");
const router = express.Router();

const {
  getAllMajors,
  getMajorById,
  createMajor,
  updateMajor,
  deleteMajor,
} = require("../controllers/major.controller");

router.get("/", getAllMajors);
router.get("/:id", getMajorById);
router.post("/", createMajor);
router.put("/:id", updateMajor);
router.delete("/:id", deleteMajor);

module.exports = router;
