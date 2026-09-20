document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  /* ---------- Navbar: mobile menu ---------- */
  const navToggle = document.getElementById('nav-toggle')
  const mobileMenu = document.getElementById('mobile-menu')
  const header = document.getElementById('site-header')
  const navProgress = document.getElementById('nav-progress')

  if (navToggle && mobileMenu) {
    const menuIcon = document.getElementById('nav-toggle-icon-menu')
    const closeIcon = document.getElementById('nav-toggle-icon-close')
    navToggle.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open')
      navToggle.setAttribute('aria-expanded', String(open))
      closeIcon?.classList.toggle('hidden', !open)
      menuIcon?.classList.toggle('hidden', open)
    })
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open')
        navToggle.setAttribute('aria-expanded', 'false')
        closeIcon?.classList.add('hidden')
        menuIcon?.classList.remove('hidden')
      })
    })
  }

  /* ---------- Navbar: scrolled state + scroll progress + back to top ---------- */
  const backToTop = document.getElementById('back-to-top')
  const onScroll = () => {
    const y = window.scrollY
    if (header) header.classList.toggle('scrolled', y > 12)
    if (navProgress) {
      const max = document.documentElement.scrollHeight - window.innerHeight
      navProgress.style.width = max > 0 ? `${Math.min(100, (y / max) * 100)}%` : '0%'
    }
    if (backToTop) backToTop.classList.toggle('visible', y > 500)
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  backToTop?.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  )

  /* ---------- Active section highlight ---------- */
  const sections = [...document.querySelectorAll('[id]')].filter((el) =>
    el.matches('section[id]')
  )
  const navLinks = [...document.querySelectorAll('a[href^="#"]')]
  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          navLinks.forEach((link) => {
            const active = link.getAttribute('href') === `#${entry.target.id}`
            link.classList.toggle('is-active', active)
            if (active) link.setAttribute('aria-current', 'true')
            else link.removeAttribute('aria-current')
          })
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => io.observe(s))
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal')
  if (revealEls.length && 'IntersectionObserver' in window && !reduceMotion) {
    const rio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            rio.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    revealEls.forEach((el) => rio.observe(el))
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'))
  }

  /* ---------- Typewriter (hero role) ---------- */
  const role = document.getElementById('role-title')
  if (role) {
    const text = role.dataset.text || ''
    if (reduceMotion) {
      role.textContent = text
    } else {
      let i = 0
      const caret = document.createElement('span')
      caret.className = 'type-caret'
      caret.setAttribute('aria-hidden', 'true')
      role.appendChild(caret)
      const tick = () => {
        if (i < text.length) {
          role.insertBefore(document.createTextNode(text[i]), caret)
          i += 1
          setTimeout(tick, 28)
        }
      }
      tick()
    }
  }

  /* ---------- Particle network background ---------- */
  const canvas = document.getElementById('particles')
  if (canvas && !reduceMotion) {
    const ctx = canvas.getContext('2d')
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)
    let particles
    const random = (min, max) => Math.random() * (max - min) + min
    const init = () => {
      const count = Math.min(44, Math.floor((width * height) / 22000))
      particles = Array.from({ length: count }, () => ({
        x: random(0, width),
        y: random(0, height),
        vx: random(-0.25, 0.25),
        vy: random(-0.25, 0.25),
        r: random(1, 2.4)
      }))
    }
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
          const dx = p.x - q.x
          const dy = p.y - q.y
          const d = Math.hypot(dx, dy)
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
      requestAnimationFrame(draw)
    }
    const resize = () => {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
      init()
    }
    resize()
    window.addEventListener('resize', resize)
    draw()
  }
})