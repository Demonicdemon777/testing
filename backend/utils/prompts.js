exports.resumeAnalysis = (resumeText, role) => {

return `
Analyze the following resume.

Provide:

1. Improved bullet points with strong action verbs
2. Grammar and clarity improvements
3. Missing skills for the role: ${role}
4. Suggestions for better projects
5. LinkedIn summary
6. Resume score out of 100

Resume:
${resumeText}
`;

};


exports.interviewQuestions = (resumeText) => {

return `
You are an AI interview simulator.

Generate 10 personalized interview questions based on the candidate's resume.

The questions should focus on:
- Projects mentioned in the resume
- Technologies used
- Problem-solving approaches
- Real-world implementation of skills

Ask questions that an interviewer would ask to understand the candidate's experience.

Resume:
${resumeText}
`;

};


exports.evaluateAnswer = (question, answer) => {

return `
Evaluate the candidate answer.

Question:
${question}

Answer:
${answer}

Provide:

Score out of 10
What was good
What can improve
Better sample answer
`;

};