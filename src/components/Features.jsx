
const FEATURES = [
  {
    icon: '🎯',
    title: 'ATS Optimization',
    desc: 'Ensure your resume passes Applicant Tracking Systems with smart keyword analysis.',
  },
  {
    icon: '⚡',
    title: 'Instant Feedback',
    desc: 'Get detailed, actionable suggestions in seconds — not days.',
  },
  {
    icon: '📊',
    title: 'Score Breakdown',
    desc: 'Understand exactly where your resume excels and where to improve.',
  },
  {
    icon: '🔒',
    title: 'Private & Secure',
    desc: 'Your resume is analyzed locally and never stored on our servers.',
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <h2>Why ResumeAI?</h2>
      <div className="features-grid">
        {FEATURES.map(({ icon, title, desc }) => (
          <div className="feature-card" key={title}>
            <span className="feature-icon">{icon}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
