require("dotenv").config();

const express = require("express");
const cors = require("cors");

const resumeRoutes = require("./routes/resumeRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Root route (fixes "Cannot GET /")
app.get("/", (req, res) => {
  res.json({
    message: "Resume Analyzer Backend Running 🚀"
  });
});


// API routes
app.use("/api/resume", resumeRoutes);


// 404 handler (optional but recommended)
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});