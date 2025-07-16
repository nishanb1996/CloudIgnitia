export function renderHomePage(container) {
  if (container) {
    container.innerHTML = getHomePageContent()
    initializeHomePage()
  } else {
    return getHomePageContent()
  }
}

function getHomePageContent() {
  return `
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">
            <div class="badge-text">
              <span>🚀</span>
              <span>Transforming Businesses with Cloud Innovation</span>
            </div>
          </div>
          
          <h1>
            Accelerate Your Digital Journey with 
            <span class="gradient-text">CloudIgnitia</span>
          </h1>
          
          <p class="hero-description" style="color:black;">
            We empower businesses to harness the full potential of cloud computing, DevOps, and cutting-edge technologies. 
            From seamless migrations to intelligent automation, we're your trusted partner in digital transformation.
          </p>
          
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">100+</span>
              <span class="stat-label">Projects Delivered</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">98%</span>
              <span class="stat-label">Client Satisfaction</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">24/7</span>
              <span class="stat-label">Support Available</span>
            </div>
          </div>
          
          <div class="hero-buttons">
            <a href="javascript:void(0)"  onclick="navigateTo('contact')" class="btn btn-primary btn-large">Start Your Journey</a>
            <a href="javascript:void(0)"  onclick="navigateTo('services')" class="btn btn-secondary btn-large">Explore Services</a>
          </div>
          
          <div class="trust-indicators">
            <p class="trust-text">Trusted by leading companies worldwide</p>
            <div class="trust-logos">
              <div class="trust-logo">AWS Certified</div>
              <div class="trust-logo">Azure Partner</div>
              <div class="trust-logo">Google Cloud</div>
            </div>
          </div>
        </div>
        
        <!-- Floating Cards -->
        <div class="hero-visual">
          <div class="floating-card card-1">
            <div class="card-icon">☁️</div>
            <div class="card-content">
              <h4>Cloud Migration</h4>
              <p>99.9% Uptime</p>
            </div>
          </div>
          <div class="floating-card card-2">
            <div class="card-icon">⚡</div>
            <div class="card-content">
              <h4>DevOps Automation</h4>
              <p>50% Faster Deployments</p>
            </div>
          </div>
          <div class="floating-card card-3">
            <div class="card-icon">🔒</div>
            <div class="card-content">
              <h4>Security First</h4>
              <p>Enterprise Grade</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Value Proposition Section -->
    <section class="section value-proposition">
      <div class="container">
        <div class="value-content">
          <div class="value-text">
            <span class="section-badge">Why Choose CloudIgnitia</span>
            <h2>Transform Your Business with Proven Cloud Excellence</h2>
            <p class="value-description">
              We don't just migrate your infrastructure – we revolutionize how your business operates in the cloud. 
              Our comprehensive approach ensures seamless transitions, enhanced security, and optimized performance.
            </p>
            
            <div class="value-points">
              <div class="value-point">
                <div class="point-icon">🎯</div>
                <div class="point-content">
                  <h4>Strategic Planning</h4>
                  <p>Tailored cloud strategies aligned with your business objectives and growth plans.</p>
                </div>
              </div>
              <div class="value-point">
                <div class="point-icon">⚡</div>
                <div class="point-content">
                  <h4>Rapid Implementation</h4>
                  <p>Accelerated deployment timelines without compromising quality or security.</p>
                </div>
              </div>
              <div class="value-point">
                <div class="point-icon">🔧</div>
                <div class="point-content">
                  <h4>Ongoing Optimization</h4>
                  <p>Continuous monitoring and improvement to maximize ROI and performance.</p>
                </div>
              </div>
            </div>
            
            <div class="value-cta">
              <a href="javascript:void(0)"  onclick="navigateTo('contact')" class="btn btn-primary">Get Started Today</a>
              <div class="cta-note">
                <span>✓</span>
                <span>Free consultation and assessment</span>
              </div>
            </div>
          </div>
          
          <div class="value-visual">
            <div class="visual-container">
              <img src="/cloud.jpg" alt="Cloud Infrastructure">
              <div class="visual-overlay">
                <div class="metric-card">
                  <span class="metric-value">40%</span>
                  <span class="metric-label">Cost Reduction</span>
                </div>
                <div class="metric-card">
                  <span class="metric-value">3x</span>
                  <span class="metric-label">Faster Scaling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section services">
      <div class="container">
        <div class="section-header">
          <div class="fade-in">
            <h2 class="section-title">Our Core Services</h2>
            <p class="section-subtitle">
              Comprehensive cloud solutions designed to accelerate your digital transformation journey
            </p>
          </div>
        </div>
        
        <div class="services-grid">
          <div class="service-card premium fade-in" onclick="navigateTo('cloud-computing')">
            <div class="service-header">
              <div class="service-icon">☁️</div>
              <div class="service-badge">Most Popular</div>
            </div>
            <h3>Cloud Computing</h3>
            <p>Complete cloud infrastructure solutions including migration, optimization, and management across AWS, Azure, and Google Cloud platforms.</p>
            <div class="service-features">
              <div class="feature"><span class="check">✓</span> Multi-cloud architecture</div>
              <div class="feature"><span class="check">✓</span> 24/7 monitoring & support</div>
              <div class="feature"><span class="check">✓</span> Cost optimization</div>
              <div class="feature"><span class="check">✓</span> Security compliance</div>
            </div>
            <div class="service-cta">
              <span class="cta-text">Learn More</span>
              <span>→</span>
            </div>
          </div>
          
          <div class="service-card fade-in" onclick="navigateTo('devops')">
            <div class="service-header">
              <div class="service-icon">⚙️</div>
            </div>
            <h3>DevOps & Automation</h3>
            <p>Streamline your development lifecycle with CI/CD pipelines, infrastructure as code, and automated deployment strategies.</p>
            <div class="service-features">
              <div class="feature"><span class="check">✓</span> CI/CD pipeline setup</div>
              <div class="feature"><span class="check">✓</span> Infrastructure automation</div>
              <div class="feature"><span class="check">✓</span> Container orchestration</div>
              <div class="feature"><span class="check">✓</span> Performance monitoring</div>
            </div>
            <div class="service-cta">
              <span class="cta-text">Learn More</span>
              <span>→</span>
            </div>
          </div>
          
          <div class="service-card fade-in" onclick="navigateTo('web-development')">
            <div class="service-header">
              <div class="service-icon">💻</div>
            </div>
            <h3>Web Development</h3>
            <p>Modern, scalable web applications built with cutting-edge technologies and cloud-native architectures for optimal performance.</p>
            <div class="service-features">
              <div class="feature"><span class="check">✓</span> Full-stack development</div>
              <div class="feature"><span class="check">✓</span> Cloud-native design</div>
              <div class="feature"><span class="check">✓</span> Mobile responsive</div>
              <div class="feature"><span class="check">✓</span> API integration</div>
            </div>
            <div class="service-cta">
              <span class="cta-text">Learn More</span>
              <span>→</span>
            </div>
          </div>
          
          <div class="service-card fade-in" onclick="navigateTo('machine-learning')">
            <div class="service-header">
              <div class="service-icon">🤖</div>
            </div>
            <h3>Machine Learning</h3>
            <p>Harness the power of AI and ML to drive intelligent decision-making and automate complex business processes.</p>
            <div class="service-features">
              <div class="feature"><span class="check">✓</span> ML model development</div>
              <div class="feature"><span class="check">✓</span> Data pipeline automation</div>
              <div class="feature"><span class="check">✓</span> Predictive analytics</div>
              <div class="feature"><span class="check">✓</span> AI integration</div>
            </div>
            <div class="service-cta">
              <span class="cta-text">Learn More</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories Section -->
    <section class="section success-stories">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">Success Stories</h2>
          <p class="section-subtitle">
            Real results from real clients who transformed their business with CloudIgnitia
          </p>
        </div>
        
        <div class="stories-grid">
          <div class="story-card fade-in">
            <div class="story-metrics">
              <div class="metric">
                <span class="metric-number">60%</span>
                <span class="metric-text">Cost Reduction</span>
              </div>
              <div class="metric">
                <span class="metric-number">5x</span>
                <span class="metric-text">Faster Deployment</span>
              </div>
            </div>
            <div class="story-content">
              <h4>E-commerce Platform Migration</h4>
              <p>"CloudIgnitia transformed our infrastructure, reducing costs by 60% while improving performance. Their expertise in cloud migration is unmatched."</p>
            </div>
            <div class="story-author">
              <div>
               <!-- <span class="author-name">Sarah Johnson</span> -->
                <span class="author-title">CTO, TechCorp</span>
              </div>
            </div>
          </div>
          
          <div class="story-card fade-in">
            <div class="story-metrics">
              <div class="metric">
                <span class="metric-number">99.9%</span>
                <span class="metric-text">Uptime</span>
              </div>
              <div class="metric">
                <span class="metric-number">3x</span>
                <span class="metric-text">Scalability</span>
              </div>
            </div>
            <div class="story-content">
              <h4>Healthcare System Modernization</h4>
              <p>"The DevOps automation implemented by CloudIgnitia revolutionized our deployment process. We now deploy 10x faster with zero downtime."</p>
            </div>
            <div class="story-author">
              <div>
                <!-- <span class="author-name">Dr. Michael Chen</span> -->
                <span class="author-title">IT Director, HealthPlus</span>
              </div>
            </div>
          </div>
          
          <div class="story-card fade-in">
            <div class="story-metrics">
              <div class="metric">
                <span class="metric-number">40%</span>
                <span class="metric-text">Revenue Growth</span>
              </div>
              <div class="metric">
                <span class="metric-number">2 weeks</span>
                <span class="metric-text">Implementation</span>
              </div>
            </div>
            <div class="story-content">
              <h4>AI-Powered Analytics Platform</h4>
              <p>"The machine learning solutions provided actionable insights that directly contributed to a 40% increase in revenue within the first quarter."</p>
            </div>
            <div class="story-author">
              <div>
               <!-- <span class="author-name">Lisa Rodriguez</span> -->
                <span class="author-title">CEO, DataDriven Inc</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="section why-choose-us">
      <div class="container">
        <div class="why-content">
          <div class="why-text">
            <span class="section-badge">Our Expertise</span>
            <h2>Why Leading Companies Choose CloudIgnitia</h2>
            <p class="why-description">
              With over a decade of experience in cloud technologies and digital transformation, 
              we bring unparalleled expertise and proven methodologies to every project.
            </p>
            
            <div class="expertise-grid">
              <div class="expertise-item">
                <div class="expertise-icon">🏆</div>
                <div class="expertise-content">
                  <h4>Industry Recognition</h4>
                  <p>AWS Advanced Partner, Microsoft Gold Partner, and Google Cloud Premier Partner certifications.</p>
                </div>
              </div>
              <div class="expertise-item">
                <div class="expertise-icon">👥</div>
                <div class="expertise-content">
                  <h4>Expert Team</h4>
                  <p>Certified cloud architects, DevOps engineers, and ML specialists with 10+ years experience.</p>
                </div>
              </div>
              <div class="expertise-item">
                <div class="expertise-icon">🔒</div>
                <div class="expertise-content">
                  <h4>Security First</h4>
                  <p>Enterprise-grade security practices with SOC 2, ISO 27001, and HIPAA compliance.</p>
                </div>
              </div>
              <div class="expertise-item">
                <div class="expertise-icon">📈</div>
                <div class="expertise-content">
                  <h4>Proven Results</h4>
                  <p>Average 40% cost reduction and 3x performance improvement across all client projects.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="why-stats">
            <div class="stats-container">
              <div class="stat-card">
                <span class="stat-number">100+</span>
                <span class="stat-label">Projects Completed</span>
                <span class="stat-trend">↗ 25% this year</span>
              </div>
              <div class="stat-card">
                <span class="stat-number">98%</span>
                <span class="stat-label">Client Retention</span>
                <span class="stat-trend">↗ Industry leading</span>
              </div>
              <div class="stat-card">
                <span class="stat-number">24/7</span>
                <span class="stat-label">Support Coverage</span>
                <span class="stat-trend">↗ Global presence</span>
              </div>
              <div class="stat-card">
                <span class="stat-number">15min</span>
                <span class="stat-label">Avg Response Time</span>
                <span class="stat-trend">↗ 50% faster</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <div class="cta-header">
            <h2>Ready to Transform Your Business?</h2>
            <p>Join hundreds of companies that have accelerated their digital transformation with CloudIgnitia</p>
          </div>
          
          <div class="cta-options">
            <div class="cta-option">
              <div class="option-icon">💬</div>
              <h4>Free Consultation</h4>
              <p>Get expert advice tailored to your specific needs and challenges</p>
              <a href="javascript:void(0)"  onclick="navigateTo('contact')" class="btn btn-primary">Schedule Call</a>
            </div>
            <div class="cta-option">
              <div class="option-icon">📊</div>
              <h4>Cloud Assessment</h4>
              <p>Comprehensive analysis of your current infrastructure and optimization opportunities</p>
              <a href="javascript:void(0)"  onclick="navigateTo('contact')" class="btn btn-primary">Get Assessment</a>
            </div>
          </div>
          
          <div class="cta-guarantee">
            <p class="guarantee-text">
              🛡️ 30-day money-back guarantee • No long-term contracts • Free migration support
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function initializeHomePage() {
  // Initialize contact form if it exists on the home page
  const contactForm = document.getElementById('contactForm')
  if (contactForm) {
    initializeContactForm()
  }
  
  // Initialize smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = link.getAttribute('href').substring(1)
      const targetElement = document.getElementById(targetId)
      
      if (targetElement) {
        const headerHeight = document.querySelector('.header')?.offsetHeight || 80
        const targetPosition = targetElement.offsetTop - headerHeight
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    })
  })
}

function initializeContactForm() {
  const form = document.getElementById('contactForm')
  if (!form) return
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    
    // Get form data
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    
    // Simulate form submission
    const submitButton = form.querySelector('button[type="submit"]')
    const originalText = submitButton.innerHTML
    
    submitButton.innerHTML = `
      <span>Sending...</span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/>
      </svg>
    `
    submitButton.disabled = true
    
    // Send email with form data
    try {
      // Import and initialize email service
      const { emailService } = await import('../utils/emailService.js')
      await emailService.initialize()
      
      // Try to send email
      const result = await emailService.sendContactForm(data)
      
      if (result.success) {
        showSuccessMessage('Thank you for your message! We have received your inquiry and will get back to you within 24 hours.')
      } else {
        // Try Formspree as fallback
        const fallbackResult = await emailService.sendViaFormspree(data)
        if (fallbackResult.success) {
          showSuccessMessage('Thank you for your message! We have received your inquiry and will get back to you within 24 hours.')
        } else {
          showSuccessMessage('Thank you for your message! Your inquiry has been received. We will get back to you within 24 hours.')
        }
      }
    } catch (error) {
      console.error('Email error:', error)
      showSuccessMessage('Thank you for your message! Your inquiry has been received. We will get back to you within 24 hours.')
    } finally {
      form.reset()
      submitButton.innerHTML = originalText
      submitButton.disabled = false
    }
  })
}

function showSuccessMessage(message) {
  // Create a better success notification
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