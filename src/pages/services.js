export function renderServicesPage(container) {
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
                <li><a href="javascript:void(0)" class="nav-link" onclick="navigateTo('home')">Home</a></li>
                <li><a href="javascript:void(0)" class="nav-link active" onclick="navigateTo('services')">Services</a></li>
                <li><a href="javascript:void(0)" class="nav-link" onclick="navigateTo('about')">About</a></li>
                <li><a href="javascript:void(0)" class="nav-link" onclick="navigateTo('contact')">Contact</a></li>
                <li><a href="javascript:void(0)" class="btn btn-primary" onclick="navigateTo('contact')">Get Started</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

    <!-- Services Hero -->
    <section class="page-hero servhero">
      <div class="container">
        <div class="hero-content fade-in">
          <h1>Services</h1>
          <p>Comprehensive technology solutions to accelerate your digital transformation journey</p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section services-detailed">
      <div class="container">
        <div class="grid grid-2">
          <div class="service-detail-card fade-in" onclick="navigateTo('cloud-computing')">
            <div class="service-icon">☁️</div>
            <h3>Cloud Computing</h3>
            <p>Complete cloud infrastructure setup, migration, and management. AWS, Azure, and Google Cloud expertise with 24/7 monitoring and support.</p>
            <ul class="service-features">
              <li>Cloud Migration & Setup</li>
              <li>Infrastructure Management</li>
              <li>Cost Optimization</li>
              <li>24/7 Monitoring</li>
            </ul>
            <div class="service-cta">
              <span class="btn btn-outline">Learn More →</span>
            </div>
          </div>
          
          <div class="service-detail-card fade-in" onclick="navigateTo('devops')">
            <div class="service-icon">⚙️</div>
            <h3>DevOps Solutions</h3>
            <p>Streamline your development pipeline with CI/CD, containerization, infrastructure as code, and automated deployment strategies.</p>
            <ul class="service-features">
              <li>CI/CD Pipeline Setup</li>
              <li>Docker & Kubernetes</li>
              <li>Infrastructure as Code</li>
              <li>Automated Testing</li>
            </ul>
            <div class="service-cta">
              <span class="btn btn-outline">Learn More →</span>
            </div>
          </div>
          
          <div class="service-detail-card fade-in" onclick="navigateTo('web-development')">
            <div class="service-icon">💻</div>
            <h3>Web Development</h3>
            <p>Modern, responsive web applications built with cutting-edge technologies. Full-stack development from concept to deployment.</p>
            <ul class="service-features">
              <li>React & Vue.js Development</li>
              <li>Node.js Backend</li>
              <li>Database Design</li>
              <li>API Development</li>
            </ul>
            <div class="service-cta">
              <span class="btn btn-outline">Learn More →</span>
            </div>
          </div>
          
          <div class="service-detail-card fade-in" onclick="navigateTo('machine-learning')">
            <div class="service-icon">🤖</div>
            <h3>Machine Learning</h3>
            <p>AI-powered solutions including predictive analytics, natural language processing, computer vision, and custom ML model development.</p>
            <ul class="service-features">
              <li>Custom ML Models</li>
              <li>Data Analytics</li>
              <li>Computer Vision</li>
              <li>NLP Solutions</li>
            </ul>
            <div class="service-cta">
              <span class="btn btn-outline">Learn More →</span>
            </div>
          </div>
          
          <div class="service-detail-card fade-in">
            <div class="service-icon">🔒</div>
            <h3>Security & Compliance</h3>
            <p>Comprehensive security audits, compliance management, and implementation of best practices for data protection and privacy.</p>
            <ul class="service-features">
              <li>Security Audits</li>
              <li>Compliance Management</li>
              <li>Penetration Testing</li>
              <li>Data Protection</li>
            </ul>
            <div class="service-cta">
              <span class="btn btn-outline">Learn More →</span>
            </div>
          </div>
          
          <div class="service-detail-card fade-in">
            <div class="service-icon">📊</div>
            <h3>Data Analytics</h3>
            <p>Transform your data into actionable insights with advanced analytics, business intelligence, and real-time reporting solutions.</p>
            <ul class="service-features">
              <li>Business Intelligence</li>
              <li>Real-time Analytics</li>
              <li>Data Visualization</li>
              <li>Predictive Analytics</li>
            </ul>
            <div class="service-cta">
              <span class="btn btn-outline">Learn More →</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content fade-in">
          <h2>Ready to Transform Your Business?</h2>
          <p style="color:white;">Let's discuss your project and create a solution that drives results.</p>
          <div class="cta-buttons">
            <a href="#" class="btn btn-primary" onclick="navigateTo('contact')">Get Started</a>
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