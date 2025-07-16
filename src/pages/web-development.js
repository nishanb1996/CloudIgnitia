export function renderWebDevelopmentPage(container) {
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
                <li><a href="javascript:void(0)" class="nav-link" onclick="navigateTo('contact')">Contact</a></li>
                <li><a href="javascript:void(0)" class="btn btn-primary" onclick="navigateTo('contact')">Get Started</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

    <!-- Service Hero -->
    <section class="service-hero">
      <div class="container">
        <div class="hero-content fade-in">
          <div class="service-icon-large">💻</div>
          <h1>Web Development Services</h1>
          <p>Modern, responsive web applications built with cutting-edge technologies. Full-stack development from concept to deployment</p>
          <div class="hero-buttons">
            <a href="#" class="btn btn-primary" onclick="navigateTo('contact')">Get Started</a>
            <a href="#features" class="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section id="features" class="section">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">Web Development Capabilities</h2>
          <p class="section-subtitle">Full-stack solutions for modern web applications</p>
        </div>
        
        <div class="grid grid-2">
          <div class="feature-card fade-in">
            <div class="feature-icon">⚛️</div>
            <h4>Frontend Development</h4>
            <p>Modern React, Vue.js, and Angular applications with responsive design and optimal performance.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">🔧</div>
            <h4>Backend Development</h4>
            <p>Robust Node.js, Python, and Java backend systems with RESTful APIs and microservices architecture.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">🗄️</div>
            <h4>Database Design</h4>
            <p>Efficient database architecture with SQL and NoSQL solutions optimized for performance and scalability.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">📱</div>
            <h4>Mobile-First Design</h4>
            <p>Responsive web applications that work seamlessly across all devices and screen sizes.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">🔌</div>
            <h4>API Development</h4>
            <p>RESTful and GraphQL APIs with comprehensive documentation and security best practices.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">⚡</div>
            <h4>Performance Optimization</h4>
            <p>Fast-loading applications with code splitting, lazy loading, and advanced caching strategies.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies -->
    <section class="section bg-secondary">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">Technologies We Use</h2>
          <p class="section-subtitle">Modern tech stack for scalable web applications</p>
        </div>
        
        <div class="tools-grid">
          <div class="tool-category fade-in">
            <h4>Frontend</h4>
            <div class="tool-list">
              <span class="tool-tag">React</span>
              <span class="tool-tag">Vue.js</span>
              <span class="tool-tag">Angular</span>
              <span class="tool-tag">TypeScript</span>
            </div>
          </div>
          
          <div class="tool-category fade-in">
            <h4>Backend</h4>
            <div class="tool-list">
              <span class="tool-tag">Node.js</span>
              <span class="tool-tag">Python</span>
              <span class="tool-tag">Java</span>
              <span class="tool-tag">Express.js</span>
            </div>
          </div>
          
          <div class="tool-category fade-in">
            <h4>Databases</h4>
            <div class="tool-list">
              <span class="tool-tag">PostgreSQL</span>
              <span class="tool-tag">MongoDB</span>
              <span class="tool-tag">Redis</span>
              <span class="tool-tag">MySQL</span>
            </div>
          </div>
          
          <div class="tool-category fade-in">
            <h4>Tools</h4>
            <div class="tool-list">
              <span class="tool-tag">Webpack</span>
              <span class="tool-tag">Vite</span>
              <span class="tool-tag">Docker</span>
              <span class="tool-tag">Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Development Process -->
    <section class="section">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">Our Development Process</h2>
          <p class="section-subtitle">Agile methodology for efficient project delivery</p>
        </div>
        
        <div class="process-timeline">
          <div class="process-step fade-in">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Discovery & Planning</h4>
              <p>Understanding requirements, user research, and technical architecture planning.</p>
            </div>
          </div>
          
          <div class="process-step fade-in">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Design & Prototyping</h4>
              <p>UI/UX design, wireframing, and interactive prototypes for user validation.</p>
            </div>
          </div>
          
          <div class="process-step fade-in">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Development & Testing</h4>
              <p>Agile development with continuous testing, code reviews, and quality assurance.</p>
            </div>
          </div>
          
          <div class="process-step fade-in">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>Deployment & Support</h4>
              <p>Production deployment, monitoring setup, and ongoing maintenance support.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content fade-in">
          <h2>Ready to Build Your Web Application?</h2>
          <p style="color:white;">Let's create a modern, scalable web solution that drives your business forward.</p>
          <div class="cta-buttons">
            <a href="#" class="btn btn-primary" onclick="navigateTo('contact')">Start Your Project</a>
            <a href="#" class="btn btn-secondary" onclick="navigateTo('about')">Learn More</a>
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
}