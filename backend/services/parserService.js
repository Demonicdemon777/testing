const fs = require("fs");
const pdfParse = require("pdf-parse");
const mammoth = require("mammoth");

exports.extractText = async (filePath) => {

  const fileBuffer = fs.readFileSync(filePath);

  // If file is PDF
  if (filePath.endsWith(".pdf")) {
    const data = await pdfParse(fileBuffer);
    return data.text;
  }

  // If file is DOCX
  if (filePath.endsWith(".docx")) {
    const result = await mammoth.extractRawText({ buffer: fileBuffer });
    return result.value;
  }

  // Otherwise treat as text file
  return fileBuffer.toString();
};