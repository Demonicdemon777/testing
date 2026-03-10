import { useState, useRef } from "react";

export default function UploadSection() {

  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  }

  function handleAnalyze() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2200);
  }

  return (
    <div className="upload-section" id="upload">

      <div className="upload-box">

        <span className="upload-icon">📄</span>

        <h2>Drop your resume here</h2>

        <p>Supports PDF, DOCX, and TXT files up to 5MB</p>

        <label className="file-label" htmlFor="fileInput">
          {fileName ? `✅ ${fileName}` : '📁 Choose File'}
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

        <div className={`loading ${loading ? 'visible' : ''}`}>
          ⚡ Analyzing your resume...
        </div>

      </div>

    </div>
  );
}