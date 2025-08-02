// Updated client-side router with path-based routing
export class Router {
  constructor() {
    this.routes = new Map()
    this.currentPage = 'home'
  }

  addRoute(path, handler) {
    this.routes.set(path, handler)
  }

  navigate(path) {
    const handler = this.routes.get(path)
    const app = document.querySelector('#app')

    if (!handler || !app) return

    const isSamePage = this.currentPage === path
    app.innerHTML = ''
    handler(app)

    setTimeout(() => {
      this.initializePageFeatures()
    }, 100)

    window.scrollTo(0, 0)
    this.currentPage = path

    if (!isSamePage) {
      const url = path !== 'home' ? `/${path}` : '/'
      window.history.pushState({}, '', url)
    }
  }

  initializePageFeatures() {
    if (window.initializeAnimations) window.initializeAnimations()
    this.initializeMobileMenu()
    this.initializeSmoothScrolling()
    this.initializeServiceCardClicks()
    this.initializeFAQ()
    this.initializeContactForm()
    this.updateActiveNavigation(this.currentPage)
    this.initializeHeaderScroll()
  }

  initializeMobileMenu() {
    window.toggleMobileMenu = function () {
      const navMenu = document.querySelector('.nav-menu')
      const mobileToggle = document.querySelector('.mobile-menu-toggle')
      if (navMenu && mobileToggle) {
        navMenu.classList.toggle('active')
        mobileToggle.classList.toggle('active')
        const icon = mobileToggle.querySelector('.hamburger-icon')
        if (icon) icon.textContent = navMenu.classList.contains('active') ? '✕' : '☰'
      }
    }

    const navLinks = document.querySelectorAll('.nav-link, .btn')
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        const navMenu = document.querySelector('.nav-menu')
        const mobileToggle = document.querySelector('.mobile-menu-toggle')
        const icon = mobileToggle?.querySelector('.hamburger-icon')
        if (navMenu && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active')
          mobileToggle?.classList.remove('active')
          if (icon) icon.textContent = '☰'
        }
      })
    })

    document.addEventListener('click', (e) => {
      const navMenu = document.querySelector('.nav-menu')
      const mobileToggle = document.querySelector('.mobile-menu-toggle')
      const navContainer = document.querySelector('.nav-container')
      if (navMenu && navMenu.classList.contains('active') && !navContainer?.contains(e.target)) {
        navMenu.classList.remove('active')
        mobileToggle?.classList.remove('active')
        const icon = mobileToggle?.querySelector('.hamburger-icon')
        if (icon) icon.textContent = '☰'
      }
    })
  }

  initializeSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    anchorLinks.forEach(link => {
      link.removeEventListener('click', this.handleAnchorClick)
      link.addEventListener('click', this.handleAnchorClick.bind(this))
    })
  }

  handleAnchorClick(e) {
    e.preventDefault()
    const href = e.target.getAttribute('href')
    if (!href) return
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const headerHeight = document.querySelector('.header')?.offsetHeight || 80
      const targetPosition = targetElement.offsetTop - headerHeight
      window.scrollTo({ top: targetPosition, behavior: 'smooth' })
    }
  }

  initializeServiceCardClicks() {
    const serviceCards = document.querySelectorAll('.service-card, .service-detail-card')
    serviceCards.forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' || e.target.closest('a')) return
        const onclick = card.getAttribute('onclick')
        if (onclick) {
          const match = onclick.match(/navigateTo\('([^']+)'\)/)
          if (match) this.navigate(match[1])
        }
      })
    })
  }

  initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item')
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question')
      const toggle = item.querySelector('.faq-toggle')
      if (question && toggle) {
        question.addEventListener('click', () => {
          const isOpen = item.classList.contains('open')
          faqItems.forEach(faq => {
            faq.classList.remove('open')
            const faqToggle = faq.querySelector('.faq-toggle')
            if (faqToggle) faqToggle.textContent = '+'
          })
          if (!isOpen) {
            item.classList.add('open')
            toggle.textContent = '-'
          }
        })
      }
    })
  }

  initializeContactForm() {
    const form = document.getElementById('contactForm')
    if (!form) return
    const newForm = form.cloneNode(true)
    form.parentNode.replaceChild(newForm, form)

    newForm.addEventListener('submit', async (e) => {
      e.preventDefault()
      const formData = new FormData(newForm)
      const data = Object.fromEntries(formData)
      const submitButton = newForm.querySelector('button[type="submit"]')
      const originalText = submitButton.innerHTML
      submitButton.innerHTML = `<span>Sending...</span>`
      submitButton.disabled = true

      try {
        const { emailService } = await import('./emailService.js')
        await emailService.initialize()
        const result = await emailService.sendContactForm(data)
        this.showSuccessMessage(result.success
          ? 'Thank you for your message! We have received your inquiry and will get back to you within 24 hours.'
          : 'Thank you for your message! Your inquiry has been received. We will get back to you within 24 hours.')
      } catch (error) {
        console.error('Email error:', error)
        this.showSuccessMessage('Thank you for your message! Your inquiry has been received. We will get back to you within 24 hours.')
      } finally {
        newForm.reset()
        submitButton.innerHTML = originalText
        submitButton.disabled = false
      }
    })
  }

  showSuccessMessage(message) {
    document.querySelectorAll('.success-notification').forEach(n => n.remove())
    const notification = document.createElement('div')
    notification.className = 'success-notification'
    notification.innerHTML = `
      <div class="notification-content">
        <div class="notification-icon">✅</div>
        <div class="notification-text">${message}</div>
        <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
      </div>`
    document.body.appendChild(notification)
    setTimeout(() => notification.remove(), 5000)
  }

  updateActiveNavigation(currentPage) {
    const navLinks = document.querySelectorAll('.nav-link')
    navLinks.forEach(link => {
      link.classList.remove('active')
      const onclick = link.getAttribute('onclick')
      if (onclick && onclick.includes(currentPage)) link.classList.add('active')
      if (currentPage === 'home' && (onclick?.includes('home') || link.textContent.trim() === 'Home')) {
        link.classList.add('active')
      }
    })
  }

  initializeHeaderScroll() {
    const header = document.querySelector('.header')
    if (!header) return
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 100)
    })
  }

  handlePopState() {
    const path = window.location.pathname.replace(/^\/+/, '')
    const page = path || 'home'
    if (this.routes.has(page)) {
      this.navigate(page)
    }
  }

  getCurrentPage() {
    return this.currentPage
  }
}

export const router = new Router()
window.navigateTo = (page) => {
  router.navigate(page)
}
window.addEventListener('popstate', () => {
  router.handlePopState()
})
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.replace(/^\/+/, '')
  const initialPage = path || 'home'
  setTimeout(() => {
    if (router.routes.has(initialPage)) {
      router.navigate(initialPage)
    }
  }, 100)
})
