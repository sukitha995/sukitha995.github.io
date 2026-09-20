import {
  RESUME_URL,
  LINKS,
  NAV_LINKS,
  SKILL_GROUPS,
  HIGHLIGHT_AREAS
} from './data.js'

export function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted">{subtitle}</p>}
    </div>
  )
}

export function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/80 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <a
          href="#home"
          className="rounded text-lg font-bold tracking-tight focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <span className="text-accent">KS.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded text-sm text-muted transition-colors duration-300 hover:text-ink focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink transition-all duration-300 hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent md:hidden"
        >
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`} aria-hidden="true" />
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-line bg-background/95 backdrop-blur-md md:hidden">
          <ul className="mx-auto max-w-6xl space-y-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-4 py-3 text-muted transition-colors duration-300 hover:bg-card hover:text-ink focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export function Hero() {
  return (
    <section id="home" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-32 md:grid-cols-2">
        <div className="clip-fade">
          <p className="mb-3 inline-block rounded-full border border-line px-4 py-1 text-xs font-medium tracking-wide text-accent">
            Software · Data · AI · Cloud
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Kothuru Sukitha</h1>
          <p className="mt-3 text-xl font-semibold text-accent-bright">
            Computer Science & AI/ML Engineer
          </p>
          <p className="mt-5 max-w-xl leading-relaxed text-muted">
            Computer Science graduate specializing in AI and cloud computing, designing intelligent,
            scalable systems that drive business impact and innovation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:bg-accent-bright focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-line px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
            >
              Contact Me
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-line px-6 py-3 text-sm font-semibold text-muted transition-all duration-300 hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <i className="fa-solid fa-file-arrow-down mr-2" aria-hidden="true" />
              Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { href: LINKS.github, icon: 'fa-brands fa-github', label: 'GitHub profile' },
              { href: LINKS.linkedin, icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn profile' },
              { href: LINKS.email, icon: 'fa-solid fa-envelope', label: 'Send email' }
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                {...(href.startsWith('#') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                aria-label={`${label} (opens in a new tab)`}
                className="flex h-11 w-11 items-center justify-center rounded-md border border-line text-muted transition-all duration-300 hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <i className={`${icon} text-lg`} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="relative mx-auto w-72 rounded-2xl border border-line bg-card p-3 shadow-2xl">
            <img
              src="./profile-placeholder.svg"
              alt="Placeholder portrait of Kothuru Sukitha — replace with a real photograph"
              className="w-full rounded-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="About"
          title="Engineering Data into Decisions"
          subtitle="A Computer Science and AI/ML graduate focused on practical, business-driven technology."
        />
        <div className="mx-auto max-w-3xl space-y-6 text-center text-muted">
          <p className="leading-relaxed">
            I'm Kothuru Sukitha, a Computer Science graduate specializing in AI and cloud computing,
            designing intelligent, scalable systems that drive business impact and innovation.
          </p>
          <p className="leading-relaxed">
            My work sits at the intersection of software development, data analytics, and machine
            learning — building practical solutions whether on the algorithmic side or in production
            tooling.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {HIGHLIGHT_AREAS.map(({ text, icon }) => (
            <div
              key={text}
              className="flex items-center gap-4 rounded-lg border border-line bg-card p-5 transition-colors duration-300 hover:border-accent/60"
            >
              <i className={`${icon} text-xl text-accent`} aria-hidden="true" />
              <span className="font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          subtitle="Tools and technologies I use to build and ship."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-lg border border-line bg-card p-6 transition-colors duration-300 hover:border-accent/50"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md border border-accent/30 bg-background text-accent">
                  <i className={group.icon} aria-hidden="true" />
                </span>
                <h3 className="font-semibold">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}