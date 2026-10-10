import { useEffect, useRef, useState } from 'react';

type SectionId = 'home' | 'about' | 'projects' | 'journey' | 'skills' | 'contact';

type Project = {
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  technologies: string[];
  codeUrl: string;
  codeLabel: string;
  accent: string;
};

const githubProfile = 'https://github.com/vineetjain3009-bit';

const projects: Project[] = [
  {
    number: '01',
    title: 'Smart Study Manager',
    eyebrow: 'FRONTEND WEB PROJECT',
    description: 'A web-based study-management project built with frontend web technologies.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    codeUrl: githubProfile,
    codeLabel: 'GitHub profile',
    accent: 'violet',
  },
  {
    number: '02',
    title: 'Smart Study Manager Web',
    eyebrow: 'PYTHON WEB PROJECT',
    description: 'A web application project using Python and the Flask framework.',
    technologies: ['Python', 'Flask'],
    codeUrl: 'https://github.com/vineetjain3009-bit/Smart-Study--Manager---Web',
    codeLabel: 'repository',
    accent: 'blue',
  },
  {
    number: '03',
    title: 'Smart Campus Management',
    eyebrow: 'PORTFOLIO PROJECT',
    description: 'A campus-management project in Vineet’s portfolio. Detailed implementation information is intentionally left open until verified.',
    technologies: ['Details pending'],
    codeUrl: 'https://github.com/vineetjain3009-bit/smart-campus-management',
    codeLabel: 'repository',
    accent: 'lime',
  },
];

const certifications = [
  { title: 'Deloitte Cybersecurity Job Simulation', issuer: 'Deloitte', detail: 'Certification listed in portfolio · source link not provided', url: '' },
  { title: 'Professional Networking', issuer: 'HP LIFE', detail: 'Professional Networking certification', url: 'https://lnkd.in/p/gYME6cfU' },
  { title: 'Cybersecurity Job Simulation Certificate of Completion', issuer: 'Forage · Mastercard program', detail: 'Issued January 16, 2026', url: 'https://lnkd.in/p/gSJDRS3t' },
  { title: 'Certificate of Appreciation', issuer: "Hacker's Unity · CodeWars", detail: 'Organizer contribution · October 4, 2026', url: 'https://lnkd.in/p/gRajEq4D' },
  { title: 'Certificate of Appreciation', issuer: 'BlockseBlock · ChatGPT Codex Hackathon 2026', detail: 'Recognition for organizer contribution', url: 'https://lnkd.in/p/gq-cKC8T' },
  { title: 'Cyber Job Simulation Certificate of Completion', issuer: 'Forage', detail: 'Issued January 10, 2026', url: 'https://lnkd.in/p/gusz9Udg' },
];

const navItems: { id: SectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

function scrollToId(id: SectionId) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function getInternshipStatus(startDate = '2026-10-04T00:00:00+05:30', endDate = '2026-11-04T23:59:59+05:30') {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);
  if (now < start) return 'Scheduled';
  if (now <= end) return 'Ongoing';
  return 'Completed';
}

function Mark() {
  return <span className="mark" aria-label="Vineet Jain monogram"><span>V</span><i /></span>;
}

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

function App() {
  const [entered, setEntered] = useState(false);
  const [active, setActive] = useState<SectionId>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const status = getInternshipStatus();
  const codeAlphaStatus = getInternshipStatus('2026-10-01T00:00:00+05:30', '2026-10-31T23:59:59+05:30');

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id as SectionId);
      },
      { rootMargin: '-20% 0px -62% 0px', threshold: [0.1, 0.35, 0.7] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNav = (id: SectionId) => {
    scrollToId(id);
    setMobileMenu(false);
  };

  return (
    <div className="app-shell">
      <div className="grain" aria-hidden="true" />
      <div className="ambient ambient--one" aria-hidden="true" />
      <div className="ambient ambient--two" aria-hidden="true" />
      <div className="site-photo-bg" aria-hidden="true" />

      {!entered && (
        <div className="opening" role="dialog" aria-modal="true" aria-labelledby="opening-title">
          <div className="opening__backdrop" />
          <div className="opening__content">
            <div className="eyebrow"><span className="eyebrow__line" /> Digital portfolio / 2026</div>
            <h1 id="opening-title"><span>Vineet</span> Jain</h1>
            <p className="opening__subtitle">The journey is still being written.</p>
            <button className="enter-button" onClick={() => setEntered(true)}>
              <span>Enter the journey</span><Arrow />
            </button>
            <p className="opening__hint">A portfolio experience in motion</p>
          </div>
          <div className="opening__footer"><span>01</span><span>Scroll to explore</span><span>∞</span></div>
        </div>
      )}

      <header className={`site-header ${entered ? 'site-header--visible' : ''}`}>
        <button className="brand" onClick={() => handleNav('home')} aria-label="Go to home">
          <Mark />
          <span className="brand__text">VJ<span>/</span>26</span>
        </button>
        <nav className={`site-nav ${mobileMenu ? 'site-nav--open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <button key={item.id} className={active === item.id ? 'is-active' : ''} onClick={() => handleNav(item.id)}>
              <span className="nav-index">0{navItems.indexOf(item) + 1}</span>{item.label}
            </button>
          ))}
        </nav>
        <div className="header-actions">
          <a className="header-availability" href="mailto:vineetjain3009@gmail.com">Available for a conversation <span /></a>
          <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={mobileMenu} onClick={() => setMobileMenu((open) => !open)}><span /><span /></button>
        </div>
      </header>

      <main>
        <section className="hero section-anchor" id="home">
          <div className="hero__visual"><div className="hero__photo" aria-hidden="true" /></div>
          <div className="hero__grid" aria-hidden="true" />
          <div className="hero__content">
            <div className="eyebrow"><span className="eyebrow__line" /> Computer science / aspiring cybersecurity professional</div>
            <h2 className="hero__title"><span>Vineet</span><strong>Jain</strong></h2>
            <div className="hero__meta"><span className="hero__slash">/</span><span>The journey</span><span className="hero__dot" /> <span>Second year, CSE</span></div>
            <p className="hero__copy">I’m exploring cybersecurity, software development, and web technologies through practical projects and a growing technical foundation.</p>
            <div className="hero__actions">
              <button className="button button--primary" onClick={() => handleNav('projects')}>Explore my work <Arrow /></button>
              <a className="button button--ghost" href="mailto:vineetjain3009@gmail.com">Contact me <Arrow /></a>
            </div>
          </div>
          <div className="hero__side-note">Scroll to begin <span className="scroll-line" /></div>
          <div className="hero__code">SYS / VJ-001<br /><span>BUILDING IN PUBLIC</span></div>
        </section>

        <section className="manifesto band section-anchor" id="about">
          <div className="section-kicker">01 / About</div>
          <div className="manifesto__body">
            <p className="section-lead">A student at the intersection of <em>curiosity</em>, code, and the systems that keep our digital world moving.</p>
            <div className="manifesto__detail"><span className="detail-line" /><p>My goal is to grow into a cybersecurity and IT professional by learning carefully, building often, and staying honest about what I’m still discovering.</p></div>
          </div>
          <div className="fact-row">
            <div><span>Based in</span><strong>India</strong></div>
            <div><span>Studying</span><strong>B.Tech / CSE</strong></div>
            <div><span>Graduating</span><strong>2029</strong></div>
            <div><span>Now learning</span><strong>Security + web</strong></div>
          </div>
        </section>

        <section className="education section-anchor" aria-labelledby="education-title">
          <div className="section-kicker">02 / Education</div>
          <div className="education__card">
            <div className="education__mark"><span>AC</span><small>01</small></div>
            <div><p className="eyebrow">Arya College of Engineering &amp; IT</p><h2 id="education-title">Computer Science<br /><em>Engineering</em></h2><p className="muted">B.Tech · Second year · Expected graduation 2029</p></div>
            <div className="education__aside"><span>Current chapter</span><strong>Building the foundation.</strong></div>
          </div>
        </section>

        <section className="projects-section section-anchor" id="projects" aria-labelledby="projects-title">
          <div className="section-heading"><div><div className="section-kicker">03 / My originals</div><h2 id="projects-title">Selected <em>work</em></h2></div><p>Small systems, practical questions, and a lot still to learn.</p></div>
          <div className="project-rail">
            {projects.map((project) => (
              <article className={`project-card project-card--${project.accent}`} key={project.number}>
                <div className="project-card__art" aria-hidden="true"><div className="art-grid" /><div className="art-orbit" /><div className="art-orbit art-orbit--small" /><div className="art-core" /><span className="art-index">{project.number}</span></div>
                <div className="project-card__content"><p className="eyebrow">{project.eyebrow}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.technologies.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-card__links"><button onClick={() => setSelectedProject(project)}>View project <Arrow /></button><a href={project.codeUrl} target="_blank" rel="noreferrer">View code <Arrow /></a></div></div>
              </article>
            ))}
          </div>
          <div className="rail-caption"><span>Drag / scroll horizontally</span><span>03 originals</span></div>
        </section>

        <section className="journey-section section-anchor" id="journey" aria-labelledby="journey-title">
          <div className="section-heading section-heading--timeline"><div><div className="section-kicker">04 / Progress</div><h2 id="journey-title">Chapters in <em>progress</em></h2></div><p>Early chapters, real learning, no inflated titles.</p></div>
          <div className="timeline">
            <article className="timeline-item timeline-item--active"><div className="timeline-marker"><span /></div><div className="timeline-year">2026</div><div className="timeline-card"><div className="timeline-card__top"><span className="status-pill status-pill--lime">{status}</span><span>04 Oct — 04 Nov 2026</span></div><h3>Cyber Security Intern</h3><p className="timeline-org">Codec Technologies · Hybrid / Pan India</p><p className="muted">Internship period scheduled across these dates. This entry intentionally keeps the scope grounded in the information available.</p></div></article>
            <article className="timeline-item"><div className="timeline-marker"><span /></div><div className="timeline-year">2026</div><div className="timeline-card"><div className="timeline-card__top"><span className="status-pill status-pill--blue">Offer received</span><span>Start: 10 Oct 2026 · 1 month</span></div><h3>Python Programming Intern</h3><p className="timeline-org">SAM AI Technologies · WFH / Remote</p><p className="muted">Offer letter dated 07 October 2026. The internship focuses on real-world Python programming projects and practical exposure through real-time applications.</p><a className="timeline-link" href="https://lnkd.in/p/g6pK-njS" target="_blank" rel="noreferrer">View offer source <Arrow /></a></div></article>
            <article className="timeline-item"><div className="timeline-marker"><span /></div><div className="timeline-year">2026</div><div className="timeline-card"><div className="timeline-card__top"><span className="status-pill status-pill--lime">{codeAlphaStatus}</span><span>01 Oct — 31 Oct 2026</span></div><h3>Python Programming Intern</h3><p className="timeline-org">Code Alpha · Virtual internship</p><p className="muted">Selected for a Python Programming Intern role involving practical Python programming assignments and projects, during a virtual internship from 01 October to 31 October 2026.</p><a className="timeline-link" href="https://lnkd.in/p/g6FNEyfa" target="_blank" rel="noreferrer">View selection source <Arrow /></a></div></article>
          </div>
        </section>

        <section className="skills-section section-anchor" id="skills" aria-labelledby="skills-title">
          <div className="section-kicker">05 / Current toolkit</div><div className="skills-intro"><h2 id="skills-title">Learning by <em>building</em></h2><p>These are the tools and directions shaping the next chapter — not a ranking, just a truthful snapshot of what I’m working with.</p></div>
          <div className="skills-layout"><div className="skill-wheel" aria-hidden="true"><div className="skill-wheel__ring ring-a" /><div className="skill-wheel__ring ring-b" /><div className="skill-wheel__center">VJ<span>+</span></div><span className="skill-orb orb-a">PY</span><span className="skill-orb orb-b">&lt;/&gt;</span><span className="skill-orb orb-c">C</span><span className="skill-orb orb-d">FL</span></div><div className="skill-groups"><div><span className="skill-label">Programming</span><div className="skill-pills"><span>Python</span><span>C</span></div></div><div><span className="skill-label">Web development</span><div className="skill-pills"><span>HTML</span><span>CSS</span><span>JavaScript</span></div></div><div><span className="skill-label">Frameworks</span><div className="skill-pills"><span>Flask</span></div></div><div><span className="skill-label">Career focus</span><div className="skill-pills"><span>Cybersecurity fundamentals</span><span>IT</span><span>Software development</span></div></div></div></div>
        </section>

        <section className="credentials band" aria-labelledby="credentials-title">
          <div className="section-kicker">06 / Certifications &amp; activities</div><div className="credentials__top"><h2 id="credentials-title">Proof of <em>curiosity</em></h2><p>Verified certificates and activities from Vineet’s public LinkedIn posts. Open each linked entry to view its source.</p></div><div className="credential-list">{certifications.map((item, index) => { const content = <><span>0{index + 1}</span><span className="credential__copy"><strong>{item.title}</strong><small>{item.issuer} · {item.detail}</small></span>{item.url ? <span className="credential__link">View source <Arrow /></span> : <span className="credential__link credential__link--muted">Source pending</span>}</>; return item.url ? <a className="credential" key={`${item.title}-${item.issuer}`} href={item.url} target="_blank" rel="noreferrer">{content}</a> : <div className="credential credential--static" key={`${item.title}-${item.issuer}`}>{content}</div>; })}</div>
        </section>

        <section className="resume-section" aria-labelledby="resume-title"><div className="resume-card"><div><div className="section-kicker">07 / Resume</div><h2 id="resume-title">A concise record<br />of the <em>journey.</em></h2><p>Download Vineet’s current CV with education, technical skills, projects, internships, certifications, and activities.</p></div><a href="/resume.pdf" download="Vineet_Jain_CV.pdf" className="button button--light">Download resume <Arrow /></a><span className="resume-note">Vineet_Jain_CV.pdf · current CV</span></div></section>

        <section className="contact-section section-anchor" id="contact" aria-labelledby="contact-title"><div className="contact-section__left"><div className="section-kicker">08 / Contact</div><h2 id="contact-title">Let’s build the<br /><em>next chapter.</em></h2><p>If you’re a recruiter, developer, collaborator, or simply curious about the work, I’d be glad to connect.</p><a href="mailto:vineetjain3009@gmail.com" className="button button--primary">Start a conversation <Arrow /></a></div><div className="contact-links"><a href="mailto:vineetjain3009@gmail.com"><span>Email</span><strong>vineetjain3009@gmail.com</strong><Arrow /></a><a href="tel:+916377086083"><span>Phone</span><strong>+91 6377086083</strong><Arrow /></a><a href="https://www.linkedin.com/in/vineet-jain-157253399/" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>/vineet-jain-157253399</strong><Arrow /></a><a href={githubProfile} target="_blank" rel="noreferrer"><span>GitHub</span><strong>/vineetjain3009-bit</strong><Arrow /></a></div></section>
      </main>

      <footer className="site-footer"><div><Mark /><span>Vineet Jain — The Journey</span></div><span>© 2026 / Made with curiosity</span><button onClick={() => handleNav('home')}>Back to top ↑</button></footer>

      {selectedProject && <div className="modal-backdrop" role="presentation" onClick={() => setSelectedProject(null)}><div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" aria-label="Close project details" onClick={() => setSelectedProject(null)}>×</button><div className={`modal-art modal-art--${selectedProject.accent}`}><span>{selectedProject.number}</span><div className="art-orbit" /><div className="art-core" /></div><div className="section-kicker">{selectedProject.eyebrow}</div><h2 id="modal-title">{selectedProject.title}</h2><p>{selectedProject.description}</p><div className="tag-list">{selectedProject.technologies.map((tag) => <span key={tag}>{tag}</span>)}</div><a href={selectedProject.codeUrl} target="_blank" rel="noreferrer" className="button button--primary">Open {selectedProject.codeLabel} <Arrow /></a></div></div>}
    </div>
  );
}

export default App;
