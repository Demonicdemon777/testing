import { uploadResume, analyzeResume } from "../api/api";
import { useState, useRef } from "react";

export default function UploadSection({ setScore }) {

  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(""); // store AI feedback

  const inputRef = useRef(null);

  function handleFileChange(e) {

    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }

  }

  async function handleAnalyze() {

    if (!file) {
      alert("Please upload a resume first");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("resume", file);

    try {

      // Upload resume
      const uploadRes = await uploadResume(formData);

      const resumeText = uploadRes.data.resumeText;

      // Send text for AI analysis
      const analysisRes = await analyzeResume({
        resumeText: resumeText,
        role: "Software Developer"
      });

      console.log("AI Analysis:", analysisRes.data);

      const aiText = analysisRes.data.analysis || "";

      // Store AI feedback for display
      setAnalysis(aiText);

      // Extract score from AI response
      const match = aiText.match(/(\d+)\s*out\s*of\s*100/i);

const extractedScore = match ? parseInt(match[1]) : 75;

setScore(extractedScore);

    } catch (error) {

      console.error("Analyze error:", error);
      alert("Analysis failed");

    }

    setLoading(false);
  }

  return (
    <div className="upload-section" id="upload">

      <div className="upload-box">

        <span className="upload-icon">📄</span>

        <h2>Drop your resume here</h2>

        <p>Supports PDF, DOCX, and TXT files up to 5MB</p>

        <label className="file-label" htmlFor="fileInput">
          {fileName ? `✅ ${fileName}` : "📁 Choose File"}
        </label>

        <input
          ref={inputRef}
          type="file"
          id="fileInput"
          accept=".pdf,.doc,.docx,.txt"
          onChange={handleFileChange}
        />

        <br />

        <button
          className="btn btn-primary"
          onClick={handleAnalyze}
          style={{ marginTop: 0 }}
        >
          ✦ Analyze Resume
        </button>

        <div className={`loading ${loading ? "visible" : ""}`}>
          ⚡ Analyzing your resume...
        </div>

        {/* AI Feedback Section */}
        {analysis && (
          <div className="analysis-box">
            <h3>AI Resume Feedback</h3>
            <pre>{analysis}</pre>
          </div>
        )}

      </div>

    </div>
  );
}