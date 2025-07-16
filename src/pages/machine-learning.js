export function renderMachineLearningPage(container) {
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
          <div class="service-icon-large">🤖</div>
          <h1>Machine Learning Solutions</h1>
          <p>AI-powered solutions including predictive analytics, natural language processing, computer vision, and custom ML model development</p>
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
          <h2 class="section-title">ML Capabilities</h2>
          <p class="section-subtitle">Transform your business with intelligent automation and insights</p>
        </div>
        
        <div class="grid grid-2">
          <div class="feature-card fade-in">
            <div class="feature-icon">🧠</div>
            <h4>Custom ML Models</h4>
            <p>Develop tailored machine learning models specific to your business needs and data patterns.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">📈</div>
            <h4>Predictive Analytics</h4>
            <p>Forecast trends, customer behavior, and business outcomes with advanced predictive models.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">👁️</div>
            <h4>Computer Vision</h4>
            <p>Image recognition, object detection, and visual analysis for automated quality control and insights.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">💬</div>
            <h4>Natural Language Processing</h4>
            <p>Text analysis, sentiment analysis, chatbots, and language understanding capabilities.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">🔍</div>
            <h4>Data Mining</h4>
            <p>Extract valuable insights from large datasets using advanced data mining techniques.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">⚡</div>
            <h4>Real-time Processing</h4>
            <p>Process and analyze data in real-time for immediate insights and automated responses.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ML Technologies -->
    <section class="section bg-secondary">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">Technologies & Frameworks</h2>
          <p class="section-subtitle">Cutting-edge tools for machine learning development</p>
        </div>
        
        <div class="tools-grid">
          <div class="tool-category fade-in">
            <h4>Frameworks</h4>
            <div class="tool-list">
              <span class="tool-tag">TensorFlow</span>
              <span class="tool-tag">PyTorch</span>
              <span class="tool-tag">Scikit-learn</span>
              <span class="tool-tag">Keras</span>
            </div>
          </div>
          
          <div class="tool-category fade-in">
            <h4>Languages</h4>
            <div class="tool-list">
              <span class="tool-tag">Python</span>
              <span class="tool-tag">R</span>
              <span class="tool-tag">Julia</span>
              <span class="tool-tag">Scala</span>
            </div>
          </div>
          
          <div class="tool-category fade-in">
            <h4>Cloud ML</h4>
            <div class="tool-list">
              <span class="tool-tag">AWS SageMaker</span>
              <span class="tool-tag">Google AI Platform</span>
              <span class="tool-tag">Azure ML</span>
              <span class="tool-tag">MLflow</span>
            </div>
          </div>
          
          <div class="tool-category fade-in">
            <h4>Data Processing</h4>
            <div class="tool-list">
              <span class="tool-tag">Apache Spark</span>
              <span class="tool-tag">Pandas</span>
              <span class="tool-tag">NumPy</span>
              <span class="tool-tag">Dask</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases -->
    <section class="section">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">ML Use Cases</h2>
          <p class="section-subtitle">Real-world applications across industries</p>
        </div>
        
        <div class="grid grid-3">
          <div class="use-case-card fade-in">
            <div class="use-case-icon">🏪</div>
            <h4>Retail & E-commerce</h4>
            <p>Recommendation systems, demand forecasting, price optimization, and customer segmentation.</p>
          </div>
          
          <div class="use-case-card fade-in">
            <div class="use-case-icon">🏥</div>
            <h4>Healthcare</h4>
            <p>Medical image analysis, drug discovery, patient risk assessment, and treatment optimization.</p>
          </div>
          
          <div class="use-case-card fade-in">
            <div class="use-case-icon">🏦</div>
            <h4>Finance</h4>
            <p>Fraud detection, algorithmic trading, credit scoring, and risk management solutions.</p>
          </div>
          
          <div class="use-case-card fade-in">
            <div class="use-case-icon">🏭</div>
            <h4>Manufacturing</h4>
            <p>Predictive maintenance, quality control, supply chain optimization, and process automation.</p>
          </div>
          
          <div class="use-case-card fade-in">
            <div class="use-case-icon">🚗</div>
            <h4>Transportation</h4>
            <p>Route optimization, autonomous systems, traffic prediction, and fleet management.</p>
          </div>
          
          <div class="use-case-card fade-in">
            <div class="use-case-icon">📱</div>
            <h4>Technology</h4>
            <p>User behavior analysis, content personalization, search optimization, and automation.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content fade-in">
          <h2>Ready to Harness AI Power?</h2>
          <p style="color:white;">Let's build intelligent solutions that transform your business operations and decision-making.</p>
          <div class="cta-buttons">
            <a href="#" class="btn btn-primary" onclick="navigateTo('contact')">Start Your AI Journey</a>
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