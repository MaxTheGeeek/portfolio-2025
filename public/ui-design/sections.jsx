// === Sections: About, Experience, Projects, Skills, Education, Learning, Contact ===
const { EXPERIENCE, PROJECTS, SKILLS, SKILL_CATS, SKILL_LINES, EDUCATION, LEARNING, CONTACT } = window.PORTFOLIO;

function SceneHead({ num, title, sub }) {
  return (
    <div className="scene-head">
      <span className="scene-num">{num}</span>
      <h2 className="scene-title">{title}</h2>
      <span className="scene-sub">{sub}</span>
    </div>
  );
}

function About() {
  const PR = window.PORTFOLIO.PROFILE;
  return (
    <section className="scene" data-screen-label="02 About" id="about">
      <SceneHead num="// 01" title="About" sub="Self-portrait, in code" />
      <div className="about-grid">
        <div className="glass about-copy">
          <p>
            I'm a <strong>creative developer</strong> obsessed with the seam between design and engineering — the place where motion, 3D and considered interaction make a product feel alive instead of just functional.
          </p>
          <p>
            Most of my work lives at the intersection of <strong>React, WebGL and shaders</strong>. I care about performance and accessibility as much as craft; the most interesting moment of any project is finding the version that's beautiful <em>and</em> fast.
          </p>
          <p>
            Outside of the editor I'm usually messing about with <strong>Blender, Houdini</strong>, or learning whatever's adjacent enough to be useful. Currently {PR.location.toLowerCase()}, currently building.
          </p>
        </div>
        <div className="about-stats">
          <div className="glass stat">
            <div className="stat-num">{PR.yearsExp}<span className="unit">yrs</span></div>
            <div className="stat-label">Building for the web</div>
          </div>
          <div className="glass stat">
            <div className="stat-num">{PR.projectsShipped}<span className="unit">+</span></div>
            <div className="stat-label">Projects shipped to production</div>
          </div>
          <div className="glass stat">
            <div className="stat-num">{PR.coffeeYear}<span className="unit">cups</span></div>
            <div className="stat-label">Coffee per year (estimated)</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="scene" data-screen-label="03 Experience" id="experience">
      <SceneHead num="// 02" title="Experience" sub="Where I've shipped" />
      <div className="timeline">
        <div className="timeline-track"></div>
        {EXPERIENCE.map((e, i) => (
          <div className="tl-item" key={i}>
            <div className="tl-date">
              <strong>{e.to}</strong>
              {e.from} — {e.to}
            </div>
            <div className="tl-marker"><span className="dot"></span></div>
            <div className="glass tl-card">
              <div className="tl-card-head">
                <div>
                  <div className="tl-role">{e.role}</div>
                  <div className="tl-company">{e.company} · {e.location}</div>
                </div>
                <span className="tag cyan">{i === 0 ? "Current" : "Past"}</span>
              </div>
              <p className="tl-desc">{e.blurb}</p>
              <div className="tl-tags">
                {e.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Stylized placeholder mock for a project
function ProjectShot({ accent, idx }) {
  const variants = idx % 3;
  return (
    <div className="project-shot">
      <div className="project-shot-stripes"></div>
      <div className="project-shot-label">Placeholder · screen #{String(idx + 1).padStart(2, '0')}</div>
      <div className="project-shot-mock" style={{ borderColor: `var(--${accent}-glow, var(--line))` }}>
        <div className="project-shot-bar">
          <i></i><i></i><i></i>
        </div>
        <div className="project-shot-body">
          {variants === 0 && (
            <>
              <div className="project-shot-row w70"></div>
              <div className="project-shot-row w50"></div>
              <div className="project-shot-grid">
                <div className="project-shot-tile"></div>
                <div className="project-shot-tile alt"></div>
                <div className="project-shot-tile"></div>
                <div className="project-shot-tile alt"></div>
                <div className="project-shot-tile"></div>
                <div className="project-shot-tile alt"></div>
              </div>
            </>
          )}
          {variants === 1 && (
            <>
              <div className="project-shot-row w90"></div>
              <div className="project-shot-row w70"></div>
              <div className="project-shot-row w50"></div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 8, marginTop: 8 }}>
                <div className="project-shot-tile" style={{ aspectRatio: "auto", height: 60 }}></div>
                <div className="project-shot-tile alt" style={{ aspectRatio: "auto", height: 60 }}></div>
              </div>
            </>
          )}
          {variants === 2 && (
            <>
              <div style={{ display: "flex", gap: 6 }}>
                <div className="project-shot-row w50" style={{ flex: 1 }}></div>
                <div className="project-shot-row w50" style={{ flex: 1, background: "rgba(34, 211, 238, 0.15)" }}></div>
              </div>
              <div className="project-shot-row w90"></div>
              <div className="project-shot-row w70"></div>
              <div className="project-shot-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
                <div className="project-shot-tile alt"></div>
                <div className="project-shot-tile"></div>
                <div className="project-shot-tile alt"></div>
                <div className="project-shot-tile"></div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects({ onOpen }) {
  return (
    <section className="scene" data-screen-label="04 Projects" id="projects">
      <SceneHead num="// 03" title="Projects" sub={`${PROJECTS.length} selected`} />
      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <article key={p.name} className="glass project" onClick={() => onOpen(p)}>
            <ProjectShot accent={p.accent} idx={i} />
            <div className="project-meta">
              <div className="project-row">
                <h3 className="project-name">{p.name}</h3>
                <span className="project-num">{String(i + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}</span>
              </div>
              <p style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-mute)", marginBottom: 10 }}>
                {p.cat}
              </p>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const [hovered, setHovered] = React.useState(null);
  return (
    <section className="scene" data-screen-label="05 Skills" id="skills">
      <SceneHead num="// 04" title="Skills" sub="The constellation" />
      <div className="constellation">
        <svg className="const-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          {SKILL_LINES.map(([a, b], i) => (
            <line
              key={i}
              className="const-line"
              x1={SKILLS[a].x} y1={SKILLS[a].y}
              x2={SKILLS[b].x} y2={SKILLS[b].y}
            />
          ))}
        </svg>
        {SKILLS.map((s, i) => {
          const cat = SKILL_CATS.find(c => c.id === s.cat);
          const cls = { frontend: "cyan", threed: "violet", backend: "pink", design: "amber", tooling: "green" }[s.cat];
          return (
            <div
              key={s.name}
              className={`skill-orb ${cls}`}
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                animationDelay: `${i * 0.3}s`
              }}
              onMouseEnter={() => setHovered(s.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="skill-orb-bubble"
                style={{
                  width: s.size,
                  height: s.size,
                  fontSize: s.size > 80 ? 12 : 10,
                  '--lvl': s.level
                }}
              >
                <span className="skill-orb-level"></span>
                <span style={{ position: "relative", textAlign: "center", padding: "0 6px" }}>
                  {s.name}
                  {hovered === s.name && (
                    <span style={{ display: "block", fontSize: 9, color: "var(--ink-mute)", marginTop: 2 }}>{s.level}%</span>
                  )}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="skill-cats">
        {SKILL_CATS.map(c => (
          <div className="skill-cat" key={c.id} style={{ color: c.color }}>
            <span className="swatch"></span>
            <span style={{ color: "var(--ink-dim)" }}>{c.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function EducationLearning() {
  return (
    <section className="scene" data-screen-label="06 Education" id="education">
      <SceneHead num="// 05" title="Education & Learning" sub="Then & now" />
      <div className="dual-grid">
        <div className="glass dual-col">
          <div className="dual-head">
            <h3>Education</h3>
            <span className="tag">Foundations</span>
          </div>
          {EDUCATION.map((e, i) => (
            <div className="edu-item" key={i}>
              <div className="edu-row">
                <span className="edu-school">{e.school}</span>
                <span className="edu-date">{e.date}</span>
              </div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-desc">{e.desc}</div>
            </div>
          ))}
        </div>

        <div className="glass dual-col" id="learning" data-screen-label="07 Learning">
          <div className="dual-head">
            <h3>Currently Learning</h3>
            <span className="tag violet">In progress</span>
          </div>
          {LEARNING.map((l, i) => (
            <div className="learn-item" key={i}>
              <div className="learn-icon">
                {i % 2 === 0 ? <Icon.spark /> : <Icon.book />}
              </div>
              <div className="learn-body">
                <div className="learn-name">{l.name}</div>
                <div className="learn-meta">{l.meta}</div>
                <div className="learn-prog">
                  <div className="learn-prog-fill" style={{ width: `${l.progress}%` }}></div>
                </div>
              </div>
              <span className="tag" style={{ minWidth: 44, justifyContent: "center" }}>{l.progress}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="scene" data-screen-label="08 Contact" id="contact">
      <SceneHead num="// 06" title="Contact" sub="Let's build something" />
      <div className="contact">
        <h3 className="contact-big">Have a project?<br/><span className="grad">Say hi.</span></h3>
        <p className="contact-sub">Open to freelance, full-time roles, or just a chat about Three.js and shaders.</p>

        <div className="contact-grid">
          {CONTACT.map(c => {
            const I = Icon[c.icon];
            return (
              <a key={c.label} href={c.href} className="glass contact-card">
                <div className="contact-icon"><I /></div>
                <div className="contact-label">{c.label}</div>
                <div className="contact-val">{c.val}</div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const idx = PROJECTS.findIndex(p => p.name === project.name);
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="glass modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <ProjectShot accent={project.accent} idx={idx} />
        <div className="modal-body">
          <div className="modal-sub">{project.cat} · {project.role} · {project.timeline}</div>
          <h3 className="modal-title">{project.name}</h3>
          <p className="modal-desc">{project.desc}</p>

          <div className="modal-section">
            <h4>Stack</h4>
            <div className="project-tags">
              {project.stack.map(s => <span key={s} className="tag cyan">{s}</span>)}
            </div>
          </div>
          <div className="modal-section">
            <h4>Highlights</h4>
            <div className="modal-features">
              {project.features.map((f, i) => <div key={i} className="modal-feature">{f}</div>)}
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
            <button className="btn primary">Visit project <Icon.arrow /></button>
            <button className="btn"><Icon.github /> Source</button>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { About, Experience, Projects, Skills, EducationLearning, Contact, ProjectModal });
