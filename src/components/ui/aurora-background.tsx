const PARTICLES = [
  { size: 2, x: "12%", y: "18%", delay: "0s", duration: "22s" },
  { size: 3, x: "82%", y: "22%", delay: "2.5s", duration: "26s" },
  { size: 1.5, x: "48%", y: "55%", delay: "4s", duration: "19s" },
  { size: 2.5, x: "68%", y: "78%", delay: "1s", duration: "24s" },
  { size: 1, x: "25%", y: "42%", delay: "3.5s", duration: "17s" },
  { size: 2, x: "88%", y: "65%", delay: "5s", duration: "21s" },
  { size: 1.5, x: "52%", y: "8%", delay: "2s", duration: "23s" },
  { size: 3, x: "35%", y: "88%", delay: "1.5s", duration: "25s" },
];

export function AuroraBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    >
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />
      <div className="aurora-blob aurora-blob-4" />

      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="aurora-particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: p.x,
            top: p.y,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}
