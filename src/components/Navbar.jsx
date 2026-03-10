export default function Navbar() {
  return (
    <nav>

      <a href="#" className="nav-logo">
        Resume<span>AI</span>
      </a>

      <div className="nav-links">

        <a href="#upload">Upload</a>

        <a href="#score">Score</a>

        <a href="#features">Features</a>

        <a href="#upload" className="nav-cta">
          Get Started
        </a>

      </div>

    </nav>
  );
}