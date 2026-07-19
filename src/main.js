import './style.css'

const navToggle = document.querySelector('[data-nav-toggle]')
const nav = document.querySelector('[data-nav]')

const closeNavigation = () => {
  if (!navToggle || !nav) return

  navToggle.setAttribute('aria-expanded', 'false')
  navToggle.querySelector('.sr-only').textContent = 'Open navigation'
  nav.classList.remove('is-open')
}

navToggle?.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true'

  navToggle.setAttribute('aria-expanded', String(!isOpen))
  navToggle.querySelector('.sr-only').textContent = isOpen ? 'Open navigation' : 'Close navigation'
  nav?.classList.toggle('is-open', !isOpen)
})

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeNavigation)
})

window.addEventListener('resize', () => {
  if (window.innerWidth >= 800) closeNavigation()
})

document.querySelector('[data-year]').textContent = new Date().getFullYear()
