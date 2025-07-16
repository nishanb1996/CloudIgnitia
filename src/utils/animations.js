export function initializeAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, observerOptions)
  
  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right')
  animatedElements.forEach(el => observer.observe(el))
}

export function typeWriter(element, text, speed = 50) {
  let i = 0
  element.innerHTML = ''
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }
  
  type()
}