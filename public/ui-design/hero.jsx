// === Hero & 3D Hub ===
const { PROFILE, NAV_NODES } = window.PORTFOLIO;

function Hub({ onNav }) {
  return (
    <div className="hub">
      <div className="hub-inner">
        <div className="hub-orbit r1"></div>
        <div className="hub-orbit r2"></div>
        <div className="hub-orbit r3"></div>

        {/* Core */}
        <div className="hub-core">
          {[1,2,3,4,5,6].map(i => <div key={i} className="hub-core-face"></div>)}
        </div>

        {/* Nodes */}
        {NAV_NODES.map((node, i) => {
          const radii = { 1: 140, 2: 210, 3: 270 };
          const r = radii[node.orbit];
          const rad = (node.angle * Math.PI) / 180;
          const x = Math.cos(rad) * r;
          const z = Math.sin(rad) * r;
          // tilt orbit
          const y = Math.sin(rad) * 30;

          const Shape = () => {
            if (node.shape === "cube") return <Icon.cube />;
            if (node.shape === "sphere") return <Icon.sphere />;
            if (node.shape === "torus") return <Icon.torus />;
            if (node.shape === "diamond") return <Icon.diamond />;
            if (node.shape === "prism") return <Icon.prism />;
            return null;
          };

          return (
            <div
              key={node.id}
              className="hub-node"
              style={{ transform: `translate3d(${x}px, ${y}px, ${z}px)` }}
              onClick={() => onNav(node.id)}
            >
              <div
                className={`hub-shape ${node.shape}`}
                style={{ animation: `coreSpin ${20 + i * 3}s linear infinite reverse` }}
              >
                <Shape />
              </div>
              <div className="hub-label">{node.label}</div>
            </div>
          );
        })}
      </div>
      <div className="hub-counter">[ click any object to teleport ]</div>
    </div>
  );
}

function Hero({ onNav }) {
  return (
    <section className="hero" data-screen-label="01 Hero" id="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-eyebrow">Portfolio · v3.0 · 2026</div>
          <h1 className="hero-name">
            {PROFILE.name}<br/>
            <span className="accent">{PROFILE.surname}</span>
          </h1>
          <p className="hero-tagline">{PROFILE.tagline}</p>

          <div className="hero-cta">
            <button className="btn primary" onClick={() => onNav("projects")}>
              View Projects <span className="arrow"><Icon.arrow /></span>
            </button>
            <button className="btn" onClick={() => onNav("contact")}>
              Get in touch
            </button>
            <button className="btn">
              <Icon.download /> Resume
            </button>
          </div>

          <div className="hero-meta">
            <div className="hero-meta-item">
              Role <span>{PROFILE.title}</span>
            </div>
            <div className="hero-meta-item">
              Based <span>{PROFILE.location}</span>
            </div>
            <div className="hero-meta-item">
              Status <span style={{ color: "var(--cyan)" }}>● {PROFILE.status}</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <Hub onNav={onNav} />
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
