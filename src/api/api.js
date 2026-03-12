import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/resume",
  timeout: 30000
});

// Debug interceptor (helps see real errors)
API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API ERROR:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Upload Resume
export const uploadResume = (data) =>
  API.post("/upload", data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });

// Analyze Resume
export const analyzeResume = (data) =>
  API.post("/analyze-resume", data);

// Generate Interview Questions
export const interviewQuestions = (data) =>
  API.post("/interview-questions", data);

// Evaluate Answer
export const evaluateAnswer = (data) =>
  API.post("/evaluate-answer", data);