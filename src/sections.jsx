import { useEffect, useRef, useState } from 'react'
import {
  Menu,
  X,
  ArrowDown,
  Download,
  Mail,
  Code2,
  Layers,
  Cloud,
  Brain,
  BarChart3,
  GraduationCap,
  Sparkles
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './brand-icons.jsx'
import { RESUME_URL, LINKS, NAV_LINKS, SKILL_GROUPS, HIGHLIGHT_AREAS } from './data.js'

const ICONS = { code: Code2, layers: Layers, cloud: Cloud, brain: Brain, chart: BarChart3 }

export function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        shown ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}

export function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-2 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
        <Sparkles size={14} aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted">{subtitle}</p>}
    </Reveal>
  )
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    NAV_LINKS.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-line bg-background/90 backdrop-blur-md shadow-lg shadow-black/20'
          : 'border-transparent bg-background/50 backdrop-blur-sm'
      }`}
    >
      <div
        className="h-0.5 bg-accent transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
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

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? 'true' : undefined}
                className={`rounded text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
                  active === link.href ? 'text-accent' : 'text-muted hover:text-ink'
                }`}
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
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-line bg-background/95 backdrop-blur-md md:hidden"
        >
          <ul className="mx-auto max-w-6xl space-y-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active === link.href ? 'true' : undefined}
                  className={`block rounded-md px-4 py-3 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
                    active === link.href
                      ? 'bg-card text-accent'
                      : 'text-muted hover:bg-card hover:text-ink'
                  }`}
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
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-36 md:grid-cols-2">
        <div>
          <div className="hero-fade">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line px-4 py-1 text-xs font-medium tracking-wide text-accent">
              <Sparkles size={13} aria-hidden="true" />
              Software · Data · AI · Cloud
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Kothuru Sukitha</h1>
            <p className="hero-role mt-3 text-2xl font-semibold sm:text-3xl">
              Computer Science & AI/ML Engineer
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-muted">
              Computer Science graduate specializing in AI and cloud computing, designing
              intelligent, scalable systems that drive business impact and innovation.
            </p>
          </div>

          <div className="hero-fade mt-8 flex flex-wrap gap-4" style={{ animationDelay: '120ms' }}>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:bg-accent-bright focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            >
              View My Projects
              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-1"
                aria-hidden="true"
              />
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
              className="inline-flex items-center gap-2 rounded-md border border-line px-6 py-3 text-sm font-semibold text-muted transition-all duration-300 hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <Download size={15} aria-hidden="true" />
              Resume
            </a>
          </div>

          <div className="hero-fade mt-8 flex items-center gap-3" style={{ animationDelay: '220ms' }}>
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
                className="flex h-11 w-11 items-center justify-center rounded-md border border-line text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <Icon size={19} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="hero-fade flex justify-center md:justify-end" style={{ animationDelay: '180ms' }}>
          <div className="relative">
            <div
              className="absolute -inset-5 rounded-2xl bg-accent/10 blur-2xl"
              aria-hidden="true"
            />
            <img
              src="./profile.jpg"
              alt="Portrait of Kothuru Sukitha"
              onError={(e) => {
                e.currentTarget.src = './profile-placeholder.svg'
              }}
              className="relative aspect-[4/5] w-64 rounded-2xl border border-line object-cover shadow-2xl sm:w-72"
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
          subtitle="Computer Science Engineering focused on practical, business-driven technology."
        />

        <div className="grid items-start gap-10 lg:grid-cols-5">
          <div className="space-y-5 leading-relaxed text-muted lg:col-span-3">
            <Reveal delay={50}>
              <p>
                I'm Kothuru Sukitha, a Computer Science graduate specializing in AI and cloud
                computing, designing intelligent, scalable systems that drive business impact and
                innovation.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p>
                My work sits at the intersection of software development, data analytics, and
                machine learning — building practical solutions whether on the algorithmic side or
                in production tooling.
              </p>
            </Reveal>
            <Reveal delay={190}>
              <div className="rounded-lg border border-line bg-card p-5">
                <div className="mb-3 flex items-center gap-2 font-semibold text-accent">
                  <GraduationCap size={18} aria-hidden="true" />
                  Computer Science Engineering
                </div>
                <p className="text-sm">
                  Rooted in core computer science principles — algorithms, data structures, and
                  systems design — applied through AI/ML, analytics, and cloud-native development.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">
            {HIGHLIGHT_AREAS.map(({ text, icon }, index) => {
              const Icon = ICONS[icon]
              return (
                <Reveal key={text} delay={60 * (index + 1)}>
                  <div className="group flex items-center gap-4 rounded-lg border border-line bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-accent/30 bg-background text-accent transition-transform duration-300 group-hover:scale-110">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span className="font-medium">{text}</span>
                  </div>
                </Reveal>
              )
            })}
          </div>
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
          {SKILL_GROUPS.map((group, index) => {
            const Icon = ICONS[group.icon]
            return (
              <Reveal key={group.title} delay={index * 80}>
                <div className="group h-full rounded-lg border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md border border-accent/30 bg-background text-accent transition-transform duration-300 group-hover:scale-110">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <h3 className="font-semibold">{group.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-line px-3 py-1 text-xs text-muted transition-all duration-300 hover:border-accent/60 hover:text-ink"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}