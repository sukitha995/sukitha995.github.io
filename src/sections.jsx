import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  Download,
  Mail,
  Sparkles,
  GraduationCap,
  Coffee,
  Terminal,
  Braces,
  Database,
  Table,
  Calculator,
  FlaskConical,
  Network,
  Flame,
  Zap,
  Cloud,
  GitBranch,
  Activity,
  NotebookPen,
  Gauge,
  Workflow,
  PieChart,
  MessageSquareText,
  Sigma,
  CircleDot,
  Code2,
  Brain,
  BarChart3
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './brand-icons.jsx'
import { RESUME_URL, LINKS, NAV_LINKS, SKILLS, HIGHLIGHT_AREAS } from './data.js'

const SKILL_ICONS = {
  coffee: Coffee,
  terminal: Terminal,
  braces: Braces,
  database: Database,
  table: Table,
  calculator: Calculator,
  flask: FlaskConical,
  network: Network,
  flame: Flame,
  zap: Zap,
  cloud: Cloud,
  gitbranch: GitBranch,
  activity: Activity,
  notebook: NotebookPen,
  gauge: Gauge,
  workflow: Workflow,
  pie: PieChart,
  messages: MessageSquareText,
  sigma: Sigma,
  circledot: CircleDot
}

const AREA_ICONS = {
  'code-2': Code2,
  brain: Brain,
  'bar-chart-3': BarChart3,
  cloud: Cloud
}

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
      className={`reveal ${shown ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

export function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
        <Sparkles size={14} aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted">{subtitle}</p>}
    </Reveal>
  )
}

export function Typewriter({ text }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(text.length)
      return
    }
    let i = 0
    const id = setInterval(() => {
      i += 1
      setCount(i)
      if (i >= text.length) clearInterval(id)
    }, 32)
    return () => clearInterval(id)
  }, [text])

  return (
    <span aria-hidden="true">
      {text.slice(0, count)}
      <span className="type-caret" />
    </span>
  )
}

export function ScrollNav() {
  const [active, setActive] = useState('#home')

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
    <nav
      aria-label="Section navigation"
      className="scroll-nav fixed right-5 top-1/2 z-40 flex -translate-y-1/2 flex-col items-end gap-3"
    >
      {NAV_LINKS.map((link) => {
        const isActive = active === link.href
        return (
          <a
            key={link.href}
            href={link.href}
            aria-label={`Go to ${link.label}`}
            aria-current={isActive ? 'true' : undefined}
            title={link.label}
            className={`scroll-dot ${isActive ? 'is-active' : ''} flex items-center gap-2 rounded-full`}
          >
            <span className="scroll-dot-label">{link.label}</span>
          </a>
        )
      })}
    </nav>
  )
}

function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = canvas.getContext('2d')
    let raf = 0
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)
    const rand = (min, max) => Math.random() * (max - min) + min
    const particles = Array.from(
      { length: Math.min(46, Math.floor((width * height) / 21000)) },
      () => ({
        x: rand(0, width),
        y: rand(0, height),
        vx: rand(-0.25, 0.25),
        vy: rand(-0.25, 0.25),
        r: rand(1, 2.4)
      })
    )
    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(34, 211, 238, 0.5)'
        ctx.fill()
        for (const q of particles) {
          const d = Math.hypot(p.x - q.x, p.y - q.y)
          if (d < 110) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.14 * (1 - d / 110)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    const resize = () => {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)
    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0" aria-hidden="true" />
}

export function Hero() {
  const sectionRef = useRef(null)
  const glowRef = useRef(null)

  const handleMove = (e) => {
    const glow = glowRef.current
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!glow || !rect) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    glow.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
    glow.style.opacity = '1'
  }

  const handleLeave = () => {
    if (glowRef.current) glowRef.current.style.opacity = '0'
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative scroll-mt-24 overflow-hidden border-b border-line"
    >
      <div ref={glowRef} className="hero-glow" aria-hidden="true" />
      <Particles />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-36 md:grid-cols-2">
        <div className="relative z-10">
          <div className="hero-fade">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line px-4 py-1 text-xs font-medium tracking-wide text-accent">
              <Sparkles size={13} aria-hidden="true" />
              Software · Data · AI · Cloud
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Kothuru Sukitha</h1>
            <p
              role="text"
              aria-label="Computer Science Engineer"
              className="hero-role mt-3 text-2xl font-semibold sm:text-3xl"
            >
              <Typewriter text="Computer Science Engineer" />
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
                <Icon size={19} />
              </a>
            ))}
          </div>
        </div>

        <div className="hero-fade flex justify-center md:justify-end" style={{ animationDelay: '180ms' }}>
          <div className="relative">
            <div className="absolute -inset-5 rounded-2xl bg-accent/10 blur-2xl" aria-hidden="true" />
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
              const Icon = AREA_ICONS[icon]
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
        <div className="flex flex-wrap items-center justify-center gap-3">
          {SKILLS.map((skill, index) => {
            const Icon = SKILL_ICONS[skill.icon]
            return (
              <Reveal key={skill.name} delay={index * 40}>
                <span className="skill-chip" style={{ '--c': skill.color }}>
                  <Icon size={16} className="chip-icon" aria-hidden="true" />
                  {skill.name}
                </span>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}