export function renderAboutPage(container) {
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
                <li><a href="javascript:void(0)" class="nav-link active" onclick="navigateTo('about')">About</a></li>
                <li><a href="javascript:void(0)" class="nav-link" onclick="navigateTo('contact')">Contact</a></li>
                <li><a href="javascript:void(0)" class="btn btn-primary" onclick="navigateTo('contact')">Get Started</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

    <!-- About Hero -->
    <section class="page-hero abouthero">
      <div class="container">
        <div class="hero-content fade-in">
          <h1>About Us</h1>
          <p>Leading the future of cloud computing and DevOps with innovative solutions and expert guidance</p>
        </div>
      </div>
    </section>

    <!-- Company Story -->
    <section class="section">
      <div class="container">
        <div class="about-content">
          <div class="about-text slide-in-left">
            <h2>Our Story</h2>
            <p>Founded in 2023, CloudOps Solutions emerged from a vision to help businesses harness the full potential of cloud computing and modern DevOps practices. Our team of experienced engineers and consultants recognized the growing need for reliable, scalable, and secure cloud solutions.</p>
            <p>Founded in 2023, ClouIgnitia emerged from a vision to help businesses harness the full potential of cloud computing and modern DevOps practices. Our team of experienced engineers and consultants recognized the growing need for reliable, scalable, and secure cloud solutions.</p>
            <p>Today, we serve over 50 clients worldwide, from innovative startups to established enterprises, helping them transform their technology infrastructure and accelerate their digital transformation journey.</p>
          </div>
          
          <div class="about-image slide-in-right">
            <img src="/aboutcloud.png" alt="data center servers illustration" />
          </div>
        </div>
      </div>
    </section>


    <!-- Mission & Vision -->
    <section class="section bg-secondary">
      <div class="container">
        <div class="grid grid-2">
          <div class="mission-card fade-in">
            <div class="mission-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>To empower businesses with cutting-edge cloud computing and DevOps solutions that drive innovation, improve efficiency, and accelerate growth in the digital age.</p>
          </div>
          
          <div class="mission-card fade-in">
            <div class="mission-icon">👁️</div>
            <h3>Our Vision</h3>
            <p>To be the global leader in cloud transformation services, setting new standards for excellence in cloud computing, DevOps, and emerging technologies.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="section">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">Meet Our Team</h2>
          <p class="section-subtitle">Expert professionals dedicated to your success</p>
        </div>
        
        <div class="grid grid-3">
          <div class="team-card fade-in">
            <div class="team-image">
              <img src="/man1.jpeg" alt="Nishan Bansode" />
            </div>
            <h4>Nishan Bansode</h4>
            <p class="team-role">CEO & Cloud Architect</p>
            <p>4+ years in cloud computing and Expert in Kubernetes, Docker, and CI/CD pipelines. Certified Kubernetes Administrator and DevOps Engineer.</p>
          </div>
          
          <div class="team-card fade-in">
            <div class="team-image">
              <img src="/girl.png" alt="Rashmi Bansode" />
            </div>
            <h4>Rashmi Bansode</h4>
            <p class="team-role">CTO & Web Devloper</p>
            <p>Expert in HTML, CSS, JavaScript, TypeScript, and frameworks like React, Angular, and Vue. Experienced in REST APIs and backend with Node.js and Express.</p>
          </div>
          
          <div class="team-card fade-in">
            <div class="team-image">
              <img src="/man1.jpeg" alt="Om Bhure" />
            </div>
            <h4>Om Bhure</h4>
            <p class="team-role">Python Developer & QA Data Engineer</p>
            <p>Expert in Python, Django, and Flask for backend development. Experienced in automated testing (Selenium, Postman) and building data pipelines with SQL, Airflow, and Spark.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="section bg-secondary">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card fade-in">
            <span class="stat-number">100+</span>
            <span class="stat-label">Projects Completed</span>
          </div>
          <div class="stat-card fade-in">
            <span class="stat-number">99.9%</span>
            <span class="stat-label">Uptime Guarantee</span>
          </div>
          <div class="stat-card fade-in">
            <span class="stat-number">24/7</span>
            <span class="stat-label">Support Available</span>
          </div>
          <div class="stat-card fade-in">
            <span class="stat-number">50+</span>
            <span class="stat-label">Happy Clients</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">Our Values</h2>
          <p class="section-subtitle">The principles that guide everything we do</p>
        </div>
        
        <div class="grid grid-3">
          <div class="value-card fade-in">
            <div class="value-icon">⚡</div>
            <h4>Innovation</h4>
            <p>We stay at the forefront of technology, constantly exploring new solutions and methodologies to deliver cutting-edge results.</p>
          </div>
          
          <div class="value-card fade-in">
            <div class="value-icon">🤝</div>
            <h4>Partnership</h4>
            <p>We work closely with our clients as trusted partners, understanding their unique needs and challenges to deliver tailored solutions.</p>
          </div>
          
          <div class="value-card fade-in">
            <div class="value-icon">🎯</div>
            <h4>Excellence</h4>
            <p>We maintain the highest standards in everything we do, from code quality to customer service, ensuring exceptional outcomes.</p>
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