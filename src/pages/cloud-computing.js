export function renderCloudComputingPage(container) {
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
          <div class="service-icon-large">☁️</div>
          <h1>Cloud Computing Services</h1>
          <p>Complete cloud infrastructure setup, migration, and management with AWS, Azure, and Google Cloud expertise</p>
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
          <h2 class="section-title">Cloud Computing Features</h2>
          <p class="section-subtitle">Comprehensive cloud solutions tailored to your business needs</p>
        </div>
        
        <div class="grid grid-2">
          <div class="feature-card fade-in">
            <div class="feature-icon">🚀</div>
            <h4>Cloud Migration</h4>
            <p>Seamless migration of your existing infrastructure to the cloud with minimal downtime and maximum efficiency.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">⚡</div>
            <h4>Auto Scaling</h4>
            <p>Automatically scale your resources up or down based on demand to optimize performance and costs.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">🔒</div>
            <h4>Security First</h4>
            <p>Enterprise-grade security with encryption, access controls, and compliance with industry standards.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">💰</div>
            <h4>Cost Optimization</h4>
            <p>Continuous monitoring and optimization to reduce cloud costs while maintaining performance.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">📊</div>
            <h4>Monitoring & Analytics</h4>
            <p>Real-time monitoring, logging, and analytics to ensure optimal performance and quick issue resolution.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">🔄</div>
            <h4>Backup & Recovery</h4>
            <p>Automated backup solutions and disaster recovery planning to protect your critical data.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Cloud Platforms -->
    <section class="section bg-secondary">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">Supported Cloud Platforms</h2>
          <p class="section-subtitle">We work with all major cloud providers</p>
        </div>
        
        <div class="grid grid-3">
          <div class="platform-card fade-in">
            <div class="platform-logo">AWS</div>
            <h4>Amazon Web Services</h4>
            <p>Complete AWS solutions including EC2, S3, RDS, Lambda, and more. Our team holds AWS certifications.</p>
            <ul class="platform-features">
              <li>EC2 & Auto Scaling</li>
              <li>S3 & CloudFront</li>
              <li>RDS & DynamoDB</li>
              <li>Lambda & API Gateway</li>
            </ul>
          </div>
          
          <div class="platform-card fade-in">
            <div class="platform-logo">Azure</div>
            <h4>Microsoft Azure</h4>
            <p>Full Azure implementation including Virtual Machines, App Services, SQL Database, and Azure Functions.</p>
            <ul class="platform-features">
              <li>Virtual Machines</li>
              <li>App Services</li>
              <li>SQL Database</li>
              <li>Azure Functions</li>
            </ul>
          </div>
          
          <div class="platform-card fade-in">
            <div class="platform-logo">GCP</div>
            <h4>Google Cloud Platform</h4>
            <p>Google Cloud solutions including Compute Engine, Cloud Storage, BigQuery, and Cloud Functions.</p>
            <ul class="platform-features">
              <li>Compute Engine</li>
              <li>Cloud Storage</li>
              <li>BigQuery</li>
              <li>Cloud Functions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="section">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">Our Cloud Migration Process</h2>
          <p class="section-subtitle">A proven methodology for successful cloud adoption</p>
        </div>
        
        <div class="process-timeline">
          <div class="process-step fade-in">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Assessment & Planning</h4>
              <p>Comprehensive analysis of your current infrastructure and requirements to create a detailed migration plan.</p>
            </div>
          </div>
          
          <div class="process-step fade-in">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Architecture Design</h4>
              <p>Design optimal cloud architecture considering scalability, security, and cost-effectiveness.</p>
            </div>
          </div>
          
          <div class="process-step fade-in">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Migration Execution</h4>
              <p>Careful migration of applications and data with minimal downtime and thorough testing.</p>
            </div>
          </div>
          
          <div class="process-step fade-in">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>Optimization & Support</h4>
              <p>Continuous monitoring, optimization, and 24/7 support to ensure peak performance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content fade-in">
          <h2>Ready to Move to the Cloud?</h2>
          <p style="color:white;">Let's discuss your cloud migration strategy and create a solution that drives results.</p>
          <div class="cta-buttons">
            <a href="#" class="btn btn-primary" onclick="navigateTo('contact')">Start Your Migration</a>
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