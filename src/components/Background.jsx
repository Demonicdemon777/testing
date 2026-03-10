import React from "react";

const PARTICLES = [
  { x: "5%", d: "10s", delay: "0s" },
  { x: "12%", d: "8s", delay: "1.2s" },
  { x: "22%", d: "13s", delay: "0.4s" },
  { x: "35%", d: "9s", delay: "2.1s" },
];

export default function Background() {
  return (
    <>
      <div className="bg-layer bg-aurora"></div>
      <div className="bg-layer bg-grid"></div>

      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      <div className="particles">
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="p"
            style={{
              "--x": p.x,
              "--d": p.d,
              "--delay": p.delay
            }}
          />
        ))}
      </div>
    </>
  );
}