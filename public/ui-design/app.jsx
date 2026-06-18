// === App shell ===
const TWEAKS_DEFAULTS = /*EDITMODE-BEGIN*/{
  "intensity": 70
}/*EDITMODE-END*/;

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];

function Starfield({ count = 80 }) {
  const stars = React.useMemo(() => (
    Array.from({ length: count }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      d: Math.random() * 4,
      s: 0.5 + Math.random() * 2
    }))
  ), [count]);
  return (
    <div className="starfield">
      {stars.map((s, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.s}px`,
            height: `${s.s}px`,
            animationDelay: `${s.d}s`
          }}
        />
      ))}
    </div>
  );
}

function TopNav({ active, onNav }) {
  return (
    <nav className="topnav">
      <span className="topnav-brand"><span className="dot"></span> MB / Portfolio</span>
      <span className="topnav-divider"></span>
      {NAV_ITEMS.map(n => (
        <button
          key={n.id}
          className={active === n.id ? "active" : ""}
          onClick={() => onNav(n.id)}
        >
          {n.label}
        </button>
      ))}
    </nav>
  );
}

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAKS_DEFAULTS);
  const [active, setActive] = React.useState("hero");
  const [openProject, setOpenProject] = React.useState(null);

  // 3D intensity drives a CSS variable
  React.useEffect(() => {
    document.documentElement.style.setProperty("--intensity", String(tweaks.intensity / 50));
  }, [tweaks.intensity]);

  // Scroll-spy
  React.useEffect(() => {
    const ids = NAV_ITEMS.map(n => n.id);
    const handler = () => {
      let cur = "hero";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= window.innerHeight * 0.4) cur = id;
      }
      setActive(cur);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <Starfield />
      <div className="grid-floor"></div>

      <div className="app">
        <TopNav active={active} onNav={navTo} />
        <Hero onNav={navTo} />
        <About />
        <Experience />
        <Projects onOpen={setOpenProject} />
        <Skills />
        <EducationLearning />
        <Contact />

        <footer>
          <span>© 2026 Max Behzadi · Crafted for Three.js port</span>
          <span>v3.0 · 3D intensity {tweaks.intensity}%</span>
        </footer>
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />

      <TweaksPanel title="Tweaks">
        <TweakSection title="3D Intensity" subtitle="Glow, parallax & motion strength">
          <TweakSlider
            label="Strength"
            value={tweaks.intensity}
            min={0}
            max={120}
            step={5}
            onChange={(v) => setTweak('intensity', v)}
            suffix="%"
          />
          <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-mute)", marginTop: 8 }}>
            {tweaks.intensity < 30 && "Subtle — gentle backdrop"}
            {tweaks.intensity >= 30 && tweaks.intensity < 70 && "Balanced — recommended"}
            {tweaks.intensity >= 70 && tweaks.intensity < 100 && "Vivid — neon showreel"}
            {tweaks.intensity >= 100 && "Maximum — full cinematic"}
          </div>
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
