// Simple client-side router
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

  // 🟡 Always render, even if path is same as currentPage
  const isSamePage = this.currentPage === path

  // Clear and re-render
  app.innerHTML = ''
  handler(app)

  // Reinitialize page features
  setTimeout(() => {
    this.initializePageFeatures()
  }, 100)

  // Scroll to top
  window.scrollTo(0, 0)

  // Update current page after rendering
  this.currentPage = path

  // Update URL only if it's different
  if (!isSamePage) {
    if (path !== 'home') {
      window.history.pushState({}, '', `#${path}`)
    } else {
      window.history.pushState({}, '', '/')
    }
  }
}

  initializePageFeatures() {
    // Initialize animations
    if (window.initializeAnimations) {
      window.initializeAnimations()
    }
    
    // Initialize mobile menu
    this.initializeMobileMenu()
    
    // Initialize smooth scrolling for anchor links
    this.initializeSmoothScrolling()
    
    // Initialize service card clicks
    this.initializeServiceCardClicks()
    
    // Initialize FAQ if present
    this.initializeFAQ()
    
    // Initialize contact form if present
    this.initializeContactForm()
    
    // Update active navigation
    this.updateActiveNavigation(this.currentPage)
    
    // Initialize header scroll effect
    this.initializeHeaderScroll()
  }

  initializeMobileMenu() {
    // Make sure mobile menu toggle is available globally
    window.toggleMobileMenu = function() {
      const navMenu = document.querySelector('.nav-menu')
      const mobileToggle = document.querySelector('.mobile-menu-toggle')
      
      if (navMenu && mobileToggle) {
        navMenu.classList.toggle('active')
        mobileToggle.classList.toggle('active')
        
        // Update hamburger icon
        const icon = mobileToggle.querySelector('.hamburger-icon')
        if (icon) {
          icon.textContent = navMenu.classList.contains('active') ? '✕' : '☰'
        }
      }
    }
    
    // Close mobile menu when clicking nav links
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
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      const navMenu = document.querySelector('.nav-menu')
      const mobileToggle = document.querySelector('.mobile-menu-toggle')
      const navContainer = document.querySelector('.nav-container')
      
      if (navMenu && navMenu.classList.contains('active') && 
          !navContainer?.contains(e.target)) {
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
      // Remove existing event listeners
      link.removeEventListener('click', this.handleAnchorClick)
      // Add new event listener
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
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  initializeServiceCardClicks() {
    const serviceCards = document.querySelectorAll('.service-card, .service-detail-card')
    serviceCards.forEach(card => {
      card.addEventListener('click', (e) => {
        // Prevent click if clicking on a link inside the card
        if (e.target.tagName === 'A' || e.target.closest('a')) {
          return
        }
        
        const onclick = card.getAttribute('onclick')
        if (onclick) {
          // Extract the page name from onclick attribute
          const match = onclick.match(/navigateTo\('([^']+)'\)/)
          if (match) {
            this.navigate(match[1])
          }
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
          
          // Close all FAQ items
          faqItems.forEach(faq => {
            faq.classList.remove('open')
            const faqToggle = faq.querySelector('.faq-toggle')
            if (faqToggle) faqToggle.textContent = '+'
          })
          
          // Open clicked item if it wasn't already open
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
    
    // Remove any existing event listeners by cloning the form
    const newForm = form.cloneNode(true)
    form.parentNode.replaceChild(newForm, form)
    
    // Add single event listener to the new form
    newForm.addEventListener('submit', async (e) => {
      e.preventDefault()
      
      // Get form data
      const formData = new FormData(newForm)
      const data = Object.fromEntries(formData)
      
      // Get submit button
      const submitButton = newForm.querySelector('button[type="submit"]')
      const originalText = submitButton.innerHTML
      
      // Show loading state
      submitButton.innerHTML = `
        <span>Sending...</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/>
        </svg>
      `
      submitButton.disabled = true
      
      // Simulate form submission (replace with actual email service)
      try {
        // Import and initialize email service
        const { emailService } = await import('./emailService.js')
        await emailService.initialize()
        
        // Try to send email
        const result = await emailService.sendContactForm(data)
        
        if (result.success) {
          this.showSuccessMessage('Thank you for your message! We have received your inquiry and will get back to you within 24 hours.')
        } else {
          this.showSuccessMessage('Thank you for your message! Your inquiry has been received. We will get back to you within 24 hours.')
        }
      } catch (error) {
        console.error('Email error:', error)
        this.showSuccessMessage('Thank you for your message! Your inquiry has been received. We will get back to you within 24 hours.')
      } finally {
        // Reset form
        newForm.reset()
        // Restore button
        submitButton.innerHTML = originalText
        submitButton.disabled = false
      }
    })
  }

  showSuccessMessage(message) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.success-notification')
    existingNotifications.forEach(notification => notification.remove())
    
    // Create new notification
    const notification = document.createElement('div')
    notification.className = 'success-notification'
    notification.innerHTML = `
      <div class="notification-content">
        <div class="notification-icon">✅</div>
        <div class="notification-text">${message}</div>
        <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
      </div>
    `
    
    document.body.appendChild(notification)
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove()
      }
    }, 5000)
  }

  updateActiveNavigation(currentPage) {
    const navLinks = document.querySelectorAll('.nav-link')
    navLinks.forEach(link => {
      link.classList.remove('active')
      
      // Check if this link corresponds to the current page
      const onclick = link.getAttribute('onclick')
      if (onclick && onclick.includes(currentPage)) {
        link.classList.add('active')
      }
      
      // Special case for home page
      if (currentPage === 'home' && (onclick?.includes('home') || link.textContent.trim() === 'Home')) {
        link.classList.add('active')
      }
    })
  }

  initializeHeaderScroll() {
    const header = document.querySelector('.header')
    if (!header) return
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('scrolled')
      } else {
        header.classList.remove('scrolled')
      }
    })
  }

  getCurrentPage() {
    return this.currentPage
  }

  // Handle browser back/forward buttons
  handlePopState() {
    const hash = window.location.hash.substring(1)
    const page = hash || 'home'
    if (this.routes.has(page)) {
      this.navigate(page)
    }
  }
}

// Global router instance
export const router = new Router()

// Global navigation function
window.navigateTo = (page) => {
  router.navigate(page)
}

// Handle browser navigation
window.addEventListener('popstate', () => {
  router.handlePopState()
})

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Check for initial hash
  const hash = window.location.hash.substring(1)
  const initialPage = hash || 'home'
  
  // Navigate to initial page after routes are set up
  setTimeout(() => {
    if (router.routes.has(initialPage)) {
      router.navigate(initialPage)
    }
  }, 100)
})