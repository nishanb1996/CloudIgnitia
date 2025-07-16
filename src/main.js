import './style.css'
import { initializeAnimations } from './utils/animations.js'
import { router } from './utils/router.js'
import { renderHomePage } from './pages/home.js'
import { renderServicesPage } from './pages/services.js'
import { renderAboutPage } from './pages/about.js'
import { renderContactPage } from './pages/contact.js'
import { renderCloudComputingPage } from './pages/cloud-computing.js'
import { renderDevOpsPage } from './pages/devops.js'
import { renderWebDevelopmentPage } from './pages/web-development.js'
import { renderMachineLearningPage } from './pages/machine-learning.js'
import { renderCareersPage } from './pages/careers.js'

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  // Setup routes
  router.addRoute('home', (container) => {
    container.innerHTML = `
      <!-- Header -->
      <header class="header">
        <nav class="nav ">
          <div class="container">
            <div class="nav-container">
                    <a href="#" class="logo">
    <img src="/file.jpg" alt="CloudIgnitia Logo" class="logo-img" />
    <span class="logo-text">CloudIgnitia</span>
  </a>
              <button class="mobile-menu-toggle" onclick="toggleMobileMenu()">
                <span class="hamburger-icon">☰</span>
              </button>
              <ul class="nav-menu">
                <li><a href="javascript:void(0)" class="nav-link active" onclick="navigateTo('home')">Home</a></li>
                <li><a href="javascript:void(0)" class="nav-link" onclick="navigateTo('services')">Services</a></li>
                <li><a href="javascript:void(0)" class="nav-link" onclick="navigateTo('about')">About</a></li>
                <li><a href="javascript:void(0)" class="nav-link" onclick="navigateTo('contact')">Contact</a></li>
                <li><a href="javascript:void(0)" class="getStarted btn btn-primary" onclick="navigateTo('contact')">Get Started</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      ${renderHomePage()}

      <!-- Footer -->
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-section">
              <div class="footer-logo">
                  
    <img src="/file.jpg" alt="CloudIgnitia Logo" class="logo-img" />
 
                <span class="footer-logo-text">CloudIgnitia</span>
              </div>
              <p>Transforming businesses through innovative cloud computing and DevOps solutions.</p>
              <p>Your trusted partner for digital transformation and enterprise-grade cloud infrastructure.</p>
            </div>
            
            <div class="footer-section">
              <h4>Services</h4>
              <a href="javascript:void(0)" onclick="navigateTo('cloud-computing')">Cloud Infrastructure</a>
              <a href="javascript:void(0)" onclick="navigateTo('devops')">DevOps Automation</a>
              <a href="javascript:void(0)" onclick="navigateTo('web-development')">Web Development</a>
              <a href="javascript:void(0)" onclick="navigateTo('machine-learning')">AI & Machine Learning</a>
            </div>
            
            <div class="footer-section">
              <h4>Company</h4>
              <a href="javascript:void(0)" onclick="navigateTo('about')">About Us</a>
              <a href="javascript:void(0)" onclick="navigateTo('contact')">Contact</a>
              <a href="javascript:void(0)" onclick="navigateTo('careers')">Careers</a>
              <a href="javascript:void(0)" onclick="navigateTo('about')">Blog</a>
              <a href="javascript:void(0)" onclick="navigateTo('about')">Case Studies</a>
            </div>
            
            <div class="footer-section">
              <h4>Support</h4>
              <a href="javascript:void(0)" onclick="navigateTo('contact')">Documentation</a>
              <a href="javascript:void(0)" onclick="navigateTo('contact')">Help Center</a>
              <a href="javascript:void(0)" onclick="navigateTo('contact')">24/7 Support</a>
              <a href="javascript:void(0)" onclick="navigateTo('contact')">Status Page</a>
              <a href="javascript:void(0)" onclick="navigateTo('about')">Privacy Policy</a>
            </div>
          </div>
          
          <div class="footer-bottom">
            <p>&copy; 2025 CloudIgnitia. All rights reserved. Built with excellence for the cloud-first future.</p>
          </div>
        </div>
      </footer>
    `
    
    // Initialize page features
    router.initializePageFeatures()
  })
  router.addRoute('services', renderServicesPage)
  router.addRoute('about', renderAboutPage)
  router.addRoute('contact', renderContactPage)
  router.addRoute('cloud-computing', renderCloudComputingPage)
  router.addRoute('devops', renderDevOpsPage)
  router.addRoute('web-development', renderWebDevelopmentPage)
  router.addRoute('machine-learning', renderMachineLearningPage)
  router.addRoute('careers', renderCareersPage)

  // Navigate to initial page
  router.navigate('home')

  // Make functions globally available
  window.initializeAnimations = initializeAnimations
  
  // Mobile menu toggle function
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
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link') || e.target.classList.contains('btn')) {
      const navMenu = document.querySelector('.nav-menu')
      const mobileToggle = document.querySelector('.mobile-menu-toggle')
      const icon = mobileToggle?.querySelector('.hamburger-icon')
      
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active')
        mobileToggle?.classList.remove('active')
        if (icon) icon.textContent = '☰'
      }
    }
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
})