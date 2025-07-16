export function initializeNavigation() {
  const header = document.querySelector('.header')
  const navLinks = document.querySelectorAll('.nav-link')
  
  // Handle scroll effect on header
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled')
    } else {
      header.classList.remove('scrolled')
    }
  })
  
  // Handle navigation clicks
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = link.getAttribute('href').substring(1)
      const targetSection = document.getElementById(targetId)
      
      if (targetSection) {
        const headerHeight = header.offsetHeight
        const targetPosition = targetSection.offsetTop - headerHeight
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
      
      // Update active link
      navLinks.forEach(l => l.classList.remove('active'))
      link.classList.add('active')
    })
  })
  
  // Update active link on scroll
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]')
    const scrollPosition = window.scrollY + header.offsetHeight + 100
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute('id')
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active')
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active')
          }
        })
      }
    })
  })
}