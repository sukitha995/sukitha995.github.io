import { useState } from 'react'
import { Navbar, Hero, About, Skills, SectionHeading } from './sections.jsx'
import { LINKS, PROJECTS, EDUCATION, ACHIEVEMENTS, RESUME_URL } from './data.js'

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Work"
          subtitle="Machine learning, data, and cloud engineering projects."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.number}
              className="group flex flex-col rounded-lg border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-md border border-accent/30 bg-background text-accent">
                  <i className={project.icon} aria-hidden="true" />
                </span>
                <span className="font-mono text-sm text-subtle">#{project.number}</span>
              </div>
              <h3 className="mb-2 font-semibold leading-snug text-ink">{project.title}</h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
              <ul className="mb-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li key={tech} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                    {tech}
                  </li>
                ))}
              </ul>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors duration-300 hover:text-accent-bright focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <i className="fa-brands fa-github" aria-hidden="true" />
                View on GitHub
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <SectionHeading
          eyebrow="Experience"
          title="Education & Achievements"
          subtitle="Academic background and recognition."
        />

        <h3 className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-muted">
          Education
        </h3>
        <ol className="relative ml-3 space-y-8 border-l border-line pl-8">
          {EDUCATION.map((entry) => (
            <li key={entry.title} className="relative">
              <span
                className="absolute -left-[41px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-background"
                aria-hidden="true"
              />
              <p className="text-xs font-medium uppercase tracking-wide text-accent">{entry.period}</p>
              <h4 className="mt-1 text-lg font-semibold">{entry.title}</h4>
              <p className="text-sm text-muted">{entry.org}</p>
              <p className="mt-1 text-sm font-medium text-accent-bright">{entry.detail}</p>
            </li>
          ))}
        </ol>

        <h3 className="mb-8 mt-16 text-center text-sm font-semibold uppercase tracking-widest text-muted">
          Achievements & Certifications
        </h3>
        <ul className="grid gap-4 sm:grid-cols-2">
          {ACHIEVEMENTS.map((item) => (
            <li
              key={item.detail}
              className="flex items-start gap-4 rounded-lg border border-line bg-card p-5 transition-colors duration-300 hover:border-accent/50"
            >
              <i className="fa-solid fa-trophy mt-1 text-accent" aria-hidden="true" />
              <div>
                <p className="font-semibold">{item.badge}</p>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <SectionHeading eyebrow="Contact" title="Let's Build Something Meaningful" />
        <p className="mx-auto max-w-xl text-muted">
          Interested in collaborating on AI, data, or software projects — or looking for an engineer
          who can turn complex problems into working systems? Let's connect.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={LINKS.email}
            className="rounded-md bg-accent px-8 py-3 text-sm font-semibold text-background transition-all duration-300 hover:bg-accent-bright focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
          >
            <i className="fa-solid fa-envelope mr-2" aria-hidden="true" />
            Email Me
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line px-8 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line px-8 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <i className="fa-brands fa-github" aria-hidden="true" />
            GitHub
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line px-8 py-3 text-sm font-semibold text-muted transition-all duration-300 hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <i className="fa-solid fa-file-arrow-down" aria-hidden="true" />
            Resume
          </a>
        </div>
        <p className="mt-10 break-all text-sm text-muted">
          <i className="fa-solid fa-envelope mr-2 text-accent" aria-hidden="true" />
          {LINKS.emailDisplay}
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12">
        <div className="text-center">
          <p className="font-bold text-ink">Kothuru Sukitha</p>
          <p className="mt-1 text-sm text-muted">Computer Science & AI/ML Engineer</p>
        </div>
        <div className="flex items-center gap-3">
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
              className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-muted transition-all duration-300 hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <i className={icon} aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="text-xs text-subtle">
          © {new Date().getFullYear()} Kothuru Sukitha. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background font-sans text-ink">
      <a
        href="#home"
        className="sr-only rounded-md bg-accent px-4 py-2 text-background focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60]"
      >
        Skip to content
      </a>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}