async function analyzeResume(resumeText) {

  const score = Math.floor(Math.random() * 30) + 70;

  return {
    score,
    suggestions: [
      "Use stronger action verbs",
      "Add measurable achievements",
      "Include more technical skills"
    ]
  };

}

module.exports = analyzeResume;