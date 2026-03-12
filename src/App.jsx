import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import UploadSection from "./components/UploadSection";
import ScoreDashboard from "./components/ScoreDashboard";
import Footer from "./components/Footer";

export default function App() {

  const [score, setScore] = useState(null);

  return (
    <div>

      <Navbar />

      <Hero />

      <Features />

      <UploadSection setScore={setScore} />

      <ScoreDashboard score={score} />

      <Footer />

    </div>
  );
}