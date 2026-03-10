const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  uploadResume,
  analyzeResume,
  generateInterviewQuestions,
  evaluateAnswer
} = require("../controllers/resumeController");

const upload = multer({ dest: "uploads/" });

// Upload resume
router.post("/upload", upload.single("resume"), uploadResume);

// Analyze resume
router.post("/analyze-resume", analyzeResume);

// Generate interview questions
router.post("/interview-questions", generateInterviewQuestions);

// Evaluate answer
router.post("/evaluate-answer", evaluateAnswer);

module.exports = router;