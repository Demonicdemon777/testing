const fs = require("fs");
const pdf = require("pdf-parse");
const axios = require("axios");

let storedResumeText = ""; // store resume text after upload

// ===============================
// 1️⃣ Upload Resume
// ===============================
exports.uploadResume = async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({ error: "No resume uploaded" });
    }

    const filePath = req.file.path;

    const dataBuffer = fs.readFileSync(filePath);

    const pdfData = await pdf(dataBuffer);

    storedResumeText = pdfData.text.slice(0, 6000);

    fs.unlinkSync(filePath); // delete uploaded file

    res.json({
      message: "Resume uploaded successfully",
      charactersExtracted: storedResumeText.length
    });

  } catch (error) {
    console.error("Upload Resume Error:", error);
    res.status(500).json({ error: "Failed to upload resume" });
  }
};


// ===============================
// 2️⃣ Analyze Resume
// ===============================
exports.analyzeResume = async (req, res) => {
  try {

    if (!storedResumeText) {
      return res.status(400).json({
        error: "Upload resume first"
      });
    }

    const prompt = `
You are an AI resume reviewer.

Analyze the following resume for the role of Software Developer.

Return the analysis in this format:

ATS Score: (0-100)
Technical Skills Score: (0-100)
Projects Score: (0-100)
Resume Formatting Score: (0-100)
Overall Resume Score: (0-100)

Then explain:

1. Why the resume received this score
2. Missing technical skills
3. How to improve the resume
4. Better project suggestions
5. A short LinkedIn summary

Resume:
${storedResumeText}
`;

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "user", content: prompt }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const result = response.data.choices[0].message.content;

    res.json({
      analysis: result
    });

  } catch (error) {
    console.error("Analyze Resume Error:", error.response?.data || error.message);

    res.status(500).json({
      error: "Resume analysis failed"
    });
  }
};


// ===============================
// 3️⃣ Generate Interview Questions
// ===============================
exports.generateInterviewQuestions = async (req, res) => {
  try {

    const { skills } = req.body;

    const prompt = `
Generate 5 technical interview questions for a Software Developer 
based on these skills:

${skills}
`;

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
       model: "llama-3.3-70b-versatile",
        messages: [
          { role: "user", content: prompt }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const questions = response.data.choices[0].message.content;

    res.json({
      questions
    });

  } catch (error) {
    console.error("Interview Question Error:", error.response?.data || error.message);

    res.status(500).json({
      error: "Failed to generate interview questions"
    });
  }
};


// ===============================
// 4️⃣ Evaluate Interview Answer
// ===============================
exports.evaluateAnswer = async (req, res) => {
  try {

    const { question, answer } = req.body;

    const prompt = `
Evaluate the following interview answer.

Question:
${question}

Answer:
${answer}

Provide:

1. Score out of 10
2. Feedback
3. Suggested improved answer
`;

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "user", content: prompt }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const evaluation = response.data.choices[0].message.content;

    res.json({
      evaluation
    });

  } catch (error) {
    console.error("Answer Evaluation Error:", error.response?.data || error.message);

    res.status(500).json({
      error: "Answer evaluation failed"
    });
  }
};