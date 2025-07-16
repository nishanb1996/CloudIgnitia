export function renderContactPage(container) {
  container.innerHTML = `
    <!-- Header -->
      <header class="header">
        <nav class="nav">
          <div class="container">
            <div class="nav-container">
                    <a href="javascript:void(0)"  onclick="navigateTo('home')" class="logo">
                <img src="/file.jpg" alt="CloudIgnitia Logo" class="logo-img" />
                <span class="logo-text">CloudIgnitia</span>
              </a>
              <button class="mobile-menu-toggle" onclick="toggleMobileMenu()">
                <span class="hamburger-icon">☰</span>
              </button>
              <ul class="nav-menu">
                <li><a href="javascript:void(0)" class="nav-link " onclick="navigateTo('home')">Home</a></li>
                <li><a href="javascript:void(0)" class="nav-link" onclick="navigateTo('services')">Services</a></li>
                <li><a href="javascript:void(0)" class="nav-link" onclick="navigateTo('about')">About</a></li>
                <li><a href="javascript:void(0)" class="nav-link active" onclick="navigateTo('contact')">Contact</a></li>
                <li><a href="javascript:void(0)" class="btn btn-primary" onclick="navigateTo('contact')">Get Started</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

    <!-- Contact Hero -->
    <section class="page-hero contHero">
      <div class="container">
        <div class="hero-content fade-in">
          <h1>Get In Touch</h1>
          <p>Ready to transform your business? Let's discuss your project and create a solution that drives results.</p>
        </div>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="section">
      <div class="container">
        <div class="contact-content">
          <div class="contact-form slide-in-left">
            <h3>Send us a Message</h3>
            <form id="contactForm">
              <div class="form-group">
                <label for="name" class="form-label">Full Name</label>
                <input type="text" id="name" name="name" class="form-input" required>
              </div>
              
              <div class="form-group">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" id="email" name="email" class="form-input" required>
              </div>
              
              <div class="form-group">
                <label for="company" class="form-label">Company</label>
                <input type="text" id="company" name="company" class="form-input">
              </div>
              
              <div class="form-group">
                <label for="service" class="form-label">Service Interest</label>
                <select id="service" name="service" class="form-input">
                  <option value="">Select a service</option>
                  <option value="cloud">Cloud Computing</option>
                  <option value="devops">DevOps Solutions</option>
                  <option value="web">Web Development</option>
                  <option value="ml">Machine Learning</option>
                  <option value="security">Security & Compliance</option>
                  <option value="analytics">Data Analytics</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="message" class="form-label">Project Details</label>
                <textarea id="message" name="message" class="form-textarea" placeholder="Tell us about your project requirements..."></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message</button>
            </form>
          </div>
          
          <div class="contact-info slide-in-right">
            <h3>Contact Information</h3>
            
            <div class="contact-item">
  <div class="contact-icon">📧</div>
  <div class="contact-details">
    <h4>Email</h4>
    <p><a href="mailto:cloudignitia@gmail.com" style="text-decoration: none; color: inherit;">cloudignitia@gmail.com</a></p>
  </div>
</div>

<div class="contact-item">
  <div class="contact-icon">📱</div>
  <div class="contact-details">
    <h4>Phone</h4>
    <p><a href="tel:+918551089743" style="text-decoration: none; color: inherit;">+91 8551089743</a></p>
  </div>
</div>

            
            <div class="contact-item">
  <div class="contact-icon">📍</div>
  <div class="contact-details">
    <h4>Office</h4>
    <p>
      <a 
        href="https://www.google.com/maps/search/?api=1&query=Civil+Line+Bhandara+Maharashtra+441904" 
        target="_blank" 
        style="text-decoration: none; color: inherit;"
      >
        Civil Line<br>Bhandara, Maharashtra 441904
      </a>
    </p>
  </div>
</div>

            
            <div class="contact-item">
              <div class="contact-icon">🕒</div>
              <div class="contact-details">
                <h4>Business Hours</h4>
                <p>Mon - Fri: 9:00 AM - 6:00 PM<br>24/7 Emergency Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section bg-secondary">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-subtitle">Common questions about our services and process</p>
        </div>
        
        <div class="faq-container">
          <div class="faq-item fade-in">
            <div class="faq-question">
              <h4>How long does a typical cloud migration take?</h4>
              <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
              <p>Cloud migration timelines vary based on complexity, but typically range from 2-6 months. We provide detailed project timelines during our initial consultation.</p>
            </div>
          </div>
          
          <div class="faq-item fade-in">
            <div class="faq-question">
              <h4>Do you provide 24/7 support?</h4>
              <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
              <p>Yes, we offer 24/7 monitoring and support for all our cloud infrastructure and DevOps services to ensure maximum uptime and quick issue resolution.</p>
            </div>
          </div>
          
          <div class="faq-item fade-in">
            <div class="faq-question">
              <h4>What cloud platforms do you work with?</h4>
              <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
              <p>We specialize in AWS, Microsoft Azure, and Google Cloud Platform. Our team holds certifications across all major cloud providers.</p>
            </div>
          </div>
          
          <div class="faq-item fade-in">
            <div class="faq-question">
              <h4>Can you help with compliance requirements?</h4>
              <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
              <p>Absolutely. We help organizations meet various compliance standards including GDPR, HIPAA, SOC 2, and PCI DSS through proper security implementations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

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
  
  // Initialize FAQ
  initializeFAQ()
}

function initializeFAQ() {
  const faqItems = document.querySelectorAll('.faq-item')
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question')
    const answer = item.querySelector('.faq-answer')
    const toggle = item.querySelector('.faq-toggle')
    
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open')
      
      // Close all FAQ items
      faqItems.forEach(faq => {
        faq.classList.remove('open')
        faq.querySelector('.faq-toggle').textContent = '+'
      })
      
      // Open clicked item if it wasn't already open
      if (!isOpen) {
        item.classList.add('open')
        toggle.textContent = '-'
      }
    })
  })
}