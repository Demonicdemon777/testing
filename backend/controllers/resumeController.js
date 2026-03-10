const { extractText } = require("../services/parserService");
const { callAI } = require("../services/aiService");
const prompts = require("../utils/prompts");

// Upload Resume
exports.uploadResume = async (req, res) => {
  try {
    const filePath = req.file.path;

    const resumeText = await extractText(filePath);

    res.json({
      message: "Resume uploaded successfully",
      resumeText
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Analyze Resume
exports.analyzeResume = async (req, res) => {
  try {

    const { resumeText, role } = req.body;

    const prompt = prompts.resumeAnalysis(resumeText, role);

    const aiResponse = await callAI(prompt);

    res.json({ analysis: aiResponse });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Interview Questions
exports.generateInterviewQuestions = async (req, res) => {
  try {

    const { resumeText } = req.body;

    const prompt = prompts.interviewQuestions(resumeText);

    const aiResponse = await callAI(prompt);

    res.json({ questions: aiResponse });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Evaluate Answer
exports.evaluateAnswer = async (req, res) => {
  try {

    const { question, answer } = req.body;

    const prompt = prompts.evaluateAnswer(question, answer);

    const aiResponse = await callAI(prompt);

    res.json({ feedback: aiResponse });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};