const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  uploadResume,
  analyzeResume,
  generateInterviewQuestions,
  evaluateAnswer
} = require("../controllers/resumeController");

// Configure multer
const upload = multer({
  dest: "uploads/"
});


// 1️⃣ Upload resume
router.post("/upload", upload.single("resume"), uploadResume);


// 2️⃣ Analyze resume (after upload)
router.post("/analyze-resume", analyzeResume);


// 3️⃣ Generate interview questions
router.post("/interview-questions", generateInterviewQuestions);


// 4️⃣ Evaluate interview answer
router.post("/evaluate-answer", evaluateAnswer);


module.exports = router;