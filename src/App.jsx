import { useEffect, useState } from 'react'
import {
  Mail,
  ArrowUp,
  Download,
  ExternalLink,
  PhoneCall,
  PieChart,
  HeartPulse,
  Utensils,
  Newspaper,
  BarChart3,
  GraduationCap,
  Trophy
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './brand-icons.jsx'
import { Navbar, Hero, About, Skills, SectionHeading, Reveal } from './sections.jsx'
import { LINKS, PROJECTS, EDUCATION, ACHIEVEMENTS, RESUME_URL } from './data.js'

const PROJECT_ICONS = {
  phone: PhoneCall,
  pie: PieChart,
  heart: HeartPulse,
  utensils: Utensils,
  news: Newspaper,
  chart: BarChart3
}

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
          {PROJECTS.map((project, index) => {
            const Icon = PROJECT_ICONS[project.icon]
            return (
              <Reveal key={project.number} delay={(index % 3) * 80}>
                <article className="group flex h-full flex-col rounded-lg border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-md border border-accent/30 bg-background text-accent transition-transform duration-300 group-hover:scale-110">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span className="font-mono text-sm text-subtle">#{project.number}</span>
                  </div>
                  <h3 className="mb-2 font-semibold leading-snug text-ink">{project.title}</h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <ul className="mb-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-line px-3 py-1 text-xs text-muted transition-colors duration-300 hover:border-accent/60 hover:text-ink"
                      >
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
                    <GithubIcon size={16} aria-hidden="true" />
                    View on GitHub
                    <ExternalLink
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </article>
              </Reveal>
            )
          })}
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

        <h3 className="mb-8 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted">
          <GraduationCap size={16} aria-hidden="true" />
          Education
        </h3>
        <ol className="relative ml-3 space-y-8 border-l border-line pl-8">
          {EDUCATION.map((entry, index) => (
            <Reveal key={entry.title} delay={index * 80}>
              <li className="relative">
                <span
                  className="absolute -left-[41px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-background"
                  aria-hidden="true"
                />
                <p className="text-xs font-medium uppercase tracking-wide text-accent">
                  {entry.period}
                </p>
                <h4 className="mt-1 text-lg font-semibold">{entry.title}</h4>
                <p className="text-sm text-muted">{entry.org}</p>
                <p className="mt-1 text-sm font-medium text-accent-bright">{entry.detail}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <h3 className="mb-8 mt-16 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted">
          <Trophy size={16} aria-hidden="true" />
          Achievements & Certifications
        </h3>
        <ul className="grid gap-4 sm:grid-cols-2">
          {ACHIEVEMENTS.map((item, index) => (
            <Reveal key={item.detail} delay={(index % 2) * 80}>
              <li className="flex h-full items-start gap-4 rounded-lg border border-line bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
                <Trophy
                  size={20}
                  className="mt-0.5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-semibold">{item.badge}</p>
                  <p className="mt-1 text-sm text-muted">{item.detail}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <SectionHeading eyebrow="Contact" title="Let's Build Something Meaningful" />
        <Reveal>
          <p className="mx-auto max-w-xl text-muted">
            Interested in collaborating on AI, data, or software projects — or looking for an
            engineer who can turn complex problems into working systems? Let's connect.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={LINKS.email}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-8 py-3 text-sm font-semibold text-background transition-all duration-300 hover:bg-accent-bright focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            >
              <Mail size={16} aria-hidden="true" />
              Email Me
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line px-8 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line px-8 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <GithubIcon size={16} aria-hidden="true" />
              GitHub
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line px-8 py-3 text-sm font-semibold text-muted transition-all duration-300 hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <Download size={16} aria-hidden="true" />
              Resume
            </a>
          </div>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-10 break-all text-sm text-muted">
            <Mail size={16} className="mr-2 inline text-accent" aria-hidden="true" />
            {LINKS.emailDisplay}
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12">
        <div className="text-center">
          <p className="font-bold text-ink">Kothuru Sukitha</p>
          <p className="mt-1 text-sm text-muted">Computer Science & AI/ML Engineer</p>
        </div>
        <div className="flex items-center gap-3">
          {[
            { href: LINKS.github, Icon: GithubIcon, label: 'GitHub profile' },
            { href: LINKS.linkedin, Icon: LinkedinIcon, label: 'LinkedIn profile' },
            { href: LINKS.email, Icon: Mail, label: 'Send email' }
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} (opens in a new tab)`}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <Icon size={17} aria-hidden="true" />
            </a>
          ))}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className={`flex h-10 w-10 items-center justify-center rounded-md border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
              showTop
                ? 'border-accent bg-accent/10 text-accent opacity-100'
                : 'border-line text-muted opacity-40'
            } hover:border-accent hover:text-accent`}
          >
            <ArrowUp size={17} aria-hidden="true" />
          </button>
        </div>
        <p className="text-xs text-subtle">
          © {new Date().getFullYear()} Kothuru Sukitha. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-ink">
      <a
        href="#home"
        className="sr-only rounded-md bg-accent px-4 py-2 text-background focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60]"
      >
        Skip to content
      </a>
      <Navbar />
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