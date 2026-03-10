import React from "react";
import { Link } from "react-router-dom";
const SCORES = [
  { value: 87, label: 'Overall',    color: '#4F46E5' },
  { value: 92, label: 'Keywords',   color: '#6366F1' },
  { value: 75, label: 'Formatting', color: '#7C3AED' },
  { value: 80, label: 'Impact',     color: '#818CF8' },
];

export default function ScoreDashboard() {
  return (
    <div className="dashboard" id="score">
      <h2>Your Resume Score</h2>
      <div className="score-grid">
        {SCORES.map(({ value, label, color }) => (
          <div className="score-card" key={label}>
            <div className="score-ring" style={{ borderColor: color }}>
              {value}
            </div>
            <h3>{label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
