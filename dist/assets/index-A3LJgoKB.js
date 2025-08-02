(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();function C(){const i={threshold:.1,rootMargin:"0px 0px -50px 0px"},a=new IntersectionObserver(t=>{t.forEach(s=>{s.isIntersecting&&s.target.classList.add("visible")})},i);document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right").forEach(t=>a.observe(t))}const T="modulepreload",S=function(i){return"/"+i},m={},w=function(a,e,t){let s=Promise.resolve();if(e&&e.length>0){let v=function(d){return Promise.all(d.map(u=>Promise.resolve(u).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};var n=v;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");s=v(e.map(d=>{if(d=S(d),d in m)return;m[d]=!0;const u=d.endsWith(".css"),g=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${g}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":T,u||(p.as="script"),p.crossOrigin="",p.href=d,c&&p.setAttribute("nonce",c),document.head.appendChild(p),u)return new Promise((y,k)=>{p.addEventListener("load",y),p.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return s.then(l=>{for(const c of l||[])c.status==="rejected"&&o(c.reason);return a().catch(o)})};class j{constructor(){this.routes=new Map,this.currentPage="home"}addRoute(a,e){this.routes.set(a,e)}navigate(a){const e=this.routes.get(a),t=document.querySelector("#app");if(!e||!t)return;const s=this.currentPage===a;if(t.innerHTML="",e(t),setTimeout(()=>{this.initializePageFeatures()},100),window.scrollTo(0,0),this.currentPage=a,!s){const o=a!=="home"?`/${a}`:"/";window.history.pushState({},"",o)}}initializePageFeatures(){window.initializeAnimations&&window.initializeAnimations(),this.initializeMobileMenu(),this.initializeSmoothScrolling(),this.initializeServiceCardClicks(),this.initializeFAQ(),this.initializeContactForm(),this.updateActiveNavigation(this.currentPage),this.initializeHeaderScroll()}initializeMobileMenu(){window.toggleMobileMenu=function(){const e=document.querySelector(".nav-menu"),t=document.querySelector(".mobile-menu-toggle");if(e&&t){e.classList.toggle("active"),t.classList.toggle("active");const s=t.querySelector(".hamburger-icon");s&&(s.textContent=e.classList.contains("active")?"✕":"☰")}},document.querySelectorAll(".nav-link, .btn").forEach(e=>{e.addEventListener("click",()=>{const t=document.querySelector(".nav-menu"),s=document.querySelector(".mobile-menu-toggle"),o=s?.querySelector(".hamburger-icon");t&&t.classList.contains("active")&&(t.classList.remove("active"),s?.classList.remove("active"),o&&(o.textContent="☰"))})}),document.addEventListener("click",e=>{const t=document.querySelector(".nav-menu"),s=document.querySelector(".mobile-menu-toggle"),o=document.querySelector(".nav-container");if(t&&t.classList.contains("active")&&!o?.contains(e.target)){t.classList.remove("active"),s?.classList.remove("active");const n=s?.querySelector(".hamburger-icon");n&&(n.textContent="☰")}})}initializeSmoothScrolling(){document.querySelectorAll('a[href^="#"]').forEach(e=>{e.removeEventListener("click",this.handleAnchorClick),e.addEventListener("click",this.handleAnchorClick.bind(this))})}handleAnchorClick(a){a.preventDefault();const e=a.target.getAttribute("href");if(!e)return;const t=e.substring(1),s=document.getElementById(t);if(s){const o=document.querySelector(".header")?.offsetHeight||80,n=s.offsetTop-o;window.scrollTo({top:n,behavior:"smooth"})}}initializeServiceCardClicks(){document.querySelectorAll(".service-card, .service-detail-card").forEach(e=>{e.addEventListener("click",t=>{if(t.target.tagName==="A"||t.target.closest("a"))return;const s=e.getAttribute("onclick");if(s){const o=s.match(/navigateTo\('([^']+)'\)/);o&&this.navigate(o[1])}})})}initializeFAQ(){const a=document.querySelectorAll(".faq-item");a.forEach(e=>{const t=e.querySelector(".faq-question"),s=e.querySelector(".faq-toggle");t&&s&&t.addEventListener("click",()=>{const o=e.classList.contains("open");a.forEach(n=>{n.classList.remove("open");const l=n.querySelector(".faq-toggle");l&&(l.textContent="+")}),o||(e.classList.add("open"),s.textContent="-")})})}initializeContactForm(){const a=document.getElementById("contactForm");if(!a)return;const e=a.cloneNode(!0);a.parentNode.replaceChild(e,a),e.addEventListener("submit",async t=>{t.preventDefault();const s=new FormData(e),o=Object.fromEntries(s),n=e.querySelector('button[type="submit"]'),l=n.innerHTML;n.innerHTML="<span>Sending...</span>",n.disabled=!0;try{const{emailService:c}=await w(async()=>{const{emailService:d}=await import("./emailService-B2SxFath.js");return{emailService:d}},[]);await c.initialize();const v=await c.sendContactForm(o);this.showSuccessMessage(v.success?"Thank you for your message! We have received your inquiry and will get back to you within 24 hours.":"Thank you for your message! Your inquiry has been received. We will get back to you within 24 hours.")}catch(c){console.error("Email error:",c),this.showSuccessMessage("Thank you for your message! Your inquiry has been received. We will get back to you within 24 hours.")}finally{e.reset(),n.innerHTML=l,n.disabled=!1}})}showSuccessMessage(a){document.querySelectorAll(".success-notification").forEach(t=>t.remove());const e=document.createElement("div");e.className="success-notification",e.innerHTML=`
      <div class="notification-content">
        <div class="notification-icon">✅</div>
        <div class="notification-text">${a}</div>
        <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
      </div>`,document.body.appendChild(e),setTimeout(()=>e.remove(),5e3)}updateActiveNavigation(a){document.querySelectorAll(".nav-link").forEach(t=>{t.classList.remove("active");const s=t.getAttribute("onclick");s&&s.includes(a)&&t.classList.add("active"),a==="home"&&(s?.includes("home")||t.textContent.trim()==="Home")&&t.classList.add("active")})}initializeHeaderScroll(){const a=document.querySelector(".header");a&&window.addEventListener("scroll",()=>{a.classList.toggle("scrolled",window.scrollY>100)})}handlePopState(){const e=window.location.pathname.replace(/^\/+/,"")||"home";this.routes.has(e)&&this.navigate(e)}getCurrentPage(){return this.currentPage}}const r=new j;window.navigateTo=i=>{r.navigate(i)};window.addEventListener("popstate",()=>{r.handlePopState()});document.addEventListener("DOMContentLoaded",()=>{const a=window.location.pathname.replace(/^\/+/,"")||"home";setTimeout(()=>{r.routes.has(a)&&r.navigate(a)},100)});function A(i){return L()}function L(){return`
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
  `}function x(i){i.innerHTML=`
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
  `}function M(i){i.innerHTML=`
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
  `}function I(i){i.innerHTML=`
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
  `,D()}function D(){const i=document.querySelectorAll(".faq-item");i.forEach(a=>{const e=a.querySelector(".faq-question");a.querySelector(".faq-answer");const t=a.querySelector(".faq-toggle");e.addEventListener("click",()=>{const s=a.classList.contains("open");i.forEach(o=>{o.classList.remove("open"),o.querySelector(".faq-toggle").textContent="+"}),s||(a.classList.add("open"),t.textContent="-")})})}function P(i){i.innerHTML=`
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
  `}function q(i){i.innerHTML=`
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
          <div class="service-icon-large">⚙️</div>
          <h1>DevOps Solutions</h1>
          <p>Streamline your development pipeline with CI/CD, containerization, infrastructure as code, and automated deployment strategies</p>
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
          <h2 class="section-title">DevOps Capabilities</h2>
          <p class="section-subtitle">Accelerate development and improve deployment reliability</p>
        </div>
        
        <div class="grid grid-2">
          <div class="feature-card fade-in">
            <div class="feature-icon">🔄</div>
            <h4>CI/CD Pipelines</h4>
            <p>Automated continuous integration and deployment pipelines to accelerate software delivery and reduce errors.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">🐳</div>
            <h4>Containerization</h4>
            <p>Docker and Kubernetes implementation for scalable, portable, and efficient application deployment.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">📜</div>
            <h4>Infrastructure as Code</h4>
            <p>Terraform and CloudFormation templates for consistent, version-controlled infrastructure management.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">📊</div>
            <h4>Monitoring & Logging</h4>
            <p>Comprehensive monitoring solutions with Prometheus, Grafana, and ELK stack for full observability.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">🔒</div>
            <h4>Security Integration</h4>
            <p>DevSecOps practices with automated security testing and vulnerability scanning in the pipeline.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">⚡</div>
            <h4>Automated Testing</h4>
            <p>Comprehensive test automation including unit, integration, and end-to-end testing frameworks.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tools & Technologies -->
    <section class="section bg-secondary">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">DevOps Tools & Technologies</h2>
          <p class="section-subtitle">Industry-leading tools for modern DevOps practices</p>
        </div>
        
        <div class="tools-grid">
          <div class="tool-category fade-in">
            <h4>CI/CD</h4>
            <div class="tool-list">
              <span class="tool-tag">Jenkins</span>
              <span class="tool-tag">GitLab CI</span>
              <span class="tool-tag">GitHub Actions</span>
              <span class="tool-tag">Azure DevOps</span>
            </div>
          </div>
          
          <div class="tool-category fade-in">
            <h4>Containerization</h4>
            <div class="tool-list">
              <span class="tool-tag">Docker</span>
              <span class="tool-tag">Kubernetes</span>
              <span class="tool-tag">Helm</span>
              <span class="tool-tag">OpenShift</span>
            </div>
          </div>
          
          <div class="tool-category fade-in">
            <h4>Infrastructure</h4>
            <div class="tool-list">
              <span class="tool-tag">Terraform</span>
              <span class="tool-tag">Ansible</span>
              <span class="tool-tag">CloudFormation</span>
              <span class="tool-tag">Pulumi</span>
            </div>
          </div>
          
          <div class="tool-category fade-in">
            <h4>Monitoring</h4>
            <div class="tool-list">
              <span class="tool-tag">Prometheus</span>
              <span class="tool-tag">Grafana</span>
              <span class="tool-tag">ELK Stack</span>
              <span class="tool-tag">Datadog</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="section">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">DevOps Benefits</h2>
          <p class="section-subtitle">Transform your development and operations with proven results</p>
        </div>
        
        <div class="benefits-grid">
          <div class="benefit-card fade-in">
            <div class="benefit-stat">10x</div>
            <h4>Faster Deployments</h4>
            <p>Automated pipelines reduce deployment time from hours to minutes</p>
          </div>
          
          <div class="benefit-card fade-in">
            <div class="benefit-stat">50%</div>
            <h4>Fewer Failures</h4>
            <p>Automated testing and monitoring significantly reduce production issues</p>
          </div>
          
          <div class="benefit-card fade-in">
            <div class="benefit-stat">3x</div>
            <h4>Faster Recovery</h4>
            <p>Automated rollback and monitoring enable rapid issue resolution</p>
          </div>
          
          <div class="benefit-card fade-in">
            <div class="benefit-stat">40%</div>
            <h4>Cost Reduction</h4>
            <p>Efficient resource utilization and automation reduce operational costs</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content fade-in">
          <h2>Ready to Transform Your DevOps?</h2>
          <p style="color:white;">Let's implement modern DevOps practices that accelerate your development and improve reliability.</p>
          <div class="cta-buttons">
            <a href="#" class="btn btn-primary" onclick="navigateTo('contact')">Start Your DevOps Journey</a>
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
  `}function E(i){i.innerHTML=`
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
  `}function O(i){i.innerHTML=`
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
  `}function F(i){i.innerHTML=`
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

    <!-- Careers Hero -->
    <section class="careers-hero">
      <div class="container">
        <div class="hero-content fade-in">
          <div class="careers-badge">
            <span>🚀</span>
            <span>Join Our Mission</span>
          </div>
          <h1>Build the Future of Cloud Computing</h1>
          <p>Join our team of passionate engineers, innovators, and problem-solvers who are transforming how businesses operate in the cloud.</p>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">20+</span>
              <span class="stat-label">Team Members</span>
            </div>
           <!-- <div class="stat-item">
              <span class="stat-number">15+</span>
              <span class="stat-label">Countries</span>
            </div> -->
            <div class="stat-item">
              <span class="stat-number">100%</span>
              <span class="stat-label">Remote Friendly</span>
            </div>
          </div>
          <div class="hero-buttons">
            <a href="#open-positions" class="btn btn-primary btn-large">View Open Positions</a>
            <a href="#culture" class="btn btn-secondary btn-large">Our Culture</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Work With Us -->
    <section id="culture" class="section why-work-with-us">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">Why Work With CloudIgnitia?</h2>
          <p class="section-subtitle">We're building more than just technology – we're creating a culture of innovation, growth, and impact</p>
        </div>
        
        <div class="culture-grid">
          <div class="culture-card fade-in">
            <div class="culture-icon">🌟</div>
            <h4>Innovation First</h4>
            <p>Work with cutting-edge technologies and contribute to groundbreaking solutions that shape the future of cloud computing.</p>
          </div>
          
          <div class="culture-card fade-in">
            <div class="culture-icon">🌍</div>
            <h4>Global Impact</h4>
            <p>Your work directly impacts businesses worldwide, helping them scale, innovate, and succeed in the digital age.</p>
          </div>
          
          <div class="culture-card fade-in">
            <div class="culture-icon">📈</div>
            <h4>Continuous Growth</h4>
            <p>Invest in your professional development with learning budgets, conferences, certifications, and mentorship programs.</p>
          </div>
          
          <div class="culture-card fade-in">
            <div class="culture-icon">🤝</div>
            <h4>Collaborative Team</h4>
            <p>Work alongside brilliant minds in a supportive environment that values diverse perspectives and ideas.</p>
          </div>
          
          <div class="culture-card fade-in">
            <div class="culture-icon">⚖️</div>
            <h4>Work-Life Balance</h4>
            <p>Flexible schedules, remote work options, and unlimited PTO to help you maintain a healthy work-life balance.</p>
          </div>
          
          <div class="culture-card fade-in">
            <div class="culture-icon">💡</div>
            <h4>Ownership & Autonomy</h4>
            <p>Take ownership of your projects and make decisions that drive real business impact with full support from leadership.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="section benefits-section bg-secondary">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">Comprehensive Benefits</h2>
          <p class="section-subtitle">We invest in our team's success, health, and happiness</p>
        </div>
        
        <div class="benefits-grid">
          <div class="benefit-category fade-in">
            <div class="benefit-icon">🏥</div>
            <h4>Health & Wellness</h4>
            <ul class="benefit-list">
              <li>Premium health, dental, and vision insurance</li>
              <li>Mental health support and counseling</li>
              <li>Fitness and wellness stipend</li>
              <li>Annual health checkup reimbursement</li>
            </ul>
          </div>
          
          <div class="benefit-category fade-in">
            <div class="benefit-icon">💰</div>
            <h4>Financial</h4>
            <ul class="benefit-list">
              <li>Competitive salary and equity packages</li>
              <li>Performance-based bonuses</li>
              <li>401(k) with company matching</li>
              <li>Stock option programs</li>
            </ul>
          </div>
          
          <div class="benefit-category fade-in">
            <div class="benefit-icon">🎓</div>
            <h4>Learning & Development</h4>
            <ul class="benefit-list">
              <li>$3,000 annual learning budget</li>
              <li>Conference and training attendance</li>
              <li>Certification reimbursement</li>
              <li>Internal mentorship programs</li>
            </ul>
          </div>
          
          <div class="benefit-category fade-in">
            <div class="benefit-icon">🏖️</div>
            <h4>Time Off & Flexibility</h4>
            <ul class="benefit-list">
              <li>Unlimited PTO policy</li>
              <li>Flexible working hours</li>
              <li>Remote work opportunities</li>
              <li>Sabbatical programs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Open Positions -->
    <section id="open-positions" class="section open-positions">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">Open Positions</h2>
          <p class="section-subtitle">Find your next career opportunity with us</p>
        </div>
        
        <div class="job-filters fade-in">
          <div class="filter-group">
            <label for="department-filter">Department:</label>
            <select id="department-filter" class="filter-select">
              <option value="all">All Departments</option>
              <option value="engineering">Engineering</option>
              <option value="devops">DevOps</option>
              <option value="sales">Sales</option>
              <option value="marketing">Marketing</option>
              <option value="support">Support</option>
            </select>
          </div>
          
          <div class="filter-group">
            <label for="location-filter">Location:</label>
            <select id="location-filter" class="filter-select">
              <option value="all">All Locations</option>
              <option value="remote">Remote</option>
              <option value="san-francisco">San Francisco, CA</option>
              <option value="new-york">New York, NY</option>
              <option value="london">London, UK</option>
            </select>
          </div>
          
          <div class="filter-group">
            <label for="type-filter">Type:</label>
            <select id="type-filter" class="filter-select">
              <option value="all">All Types</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
            </select>
          </div>
        </div>
        
        <div class="jobs-grid" id="jobs-grid">
          <!-- Job listings will be populated by JavaScript -->
        </div>
      </div>
    </section>

    <!-- Application Modal -->
    <div id="application-modal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h3 id="modal-job-title">Apply for Position</h3>
          <button class="modal-close" onclick="closeApplicationModal()">&times;</button>
        </div>
        <div class="modal-body">
          <form id="application-form">
            <div class="form-row">
              <div class="form-group">
                <label for="applicant-name" class="form-label">Full Name *</label>
                <input type="text" id="applicant-name" name="name" class="form-input" required>
              </div>
              
              <div class="form-group">
                <label for="applicant-email" class="form-label">Email Address *</label>
                <input type="email" id="applicant-email" name="email" class="form-input" required>
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="applicant-phone" class="form-label">Phone Number</label>
                <input type="tel" id="applicant-phone" name="phone" class="form-input">
              </div>
              
              <div class="form-group">
                <label for="applicant-location" class="form-label">Current Location</label>
                <input type="text" id="applicant-location" name="location" class="form-input">
              </div>
            </div>
            
            <div class="form-group">
              <label for="applicant-linkedin" class="form-label">LinkedIn Profile</label>
              <input type="url" id="applicant-linkedin" name="linkedin" class="form-input" placeholder="https://linkedin.com/in/yourprofile">
            </div>
            
            <div class="form-group">
              <label for="applicant-portfolio" class="form-label">Portfolio/GitHub</label>
              <input type="url" id="applicant-portfolio" name="portfolio" class="form-input" placeholder="https://github.com/yourusername">
            </div>
            
            <div class="form-group">
              <label for="applicant-experience" class="form-label">Years of Experience</label>
              <select id="applicant-experience" name="experience" class="form-input">
                <option value="">Select experience level</option>
                <option value="0-1">0-1 years</option>
                <option value="2-3">2-3 years</option>
                <option value="4-6">4-6 years</option>
                <option value="7-10">7-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="cover-letter" class="form-label">Cover Letter *</label>
              <textarea id="cover-letter" name="coverLetter" class="form-textarea" placeholder="Tell us why you're interested in this position and what makes you a great fit..." required></textarea>
            </div>
            
            <div class="form-group">
              <label for="resume-upload" class="form-label">Resume/CV *</label>
              <div class="file-upload-area">
                <input type="file" id="resume-upload" name="resume" accept=".pdf,.doc,.docx" required>
                <div class="file-upload-text">
                  <span>📄</span>
                  <span>Click to upload or drag and drop</span>
                  <small>PDF, DOC, or DOCX (max 5MB)</small>
                </div>
              </div>
            </div>
            
            <div class="form-actions">
              <button type="button" class="btn btn-secondary" onclick="closeApplicationModal()">Cancel</button>
              <button type="submit" class="btn btn-primary">Submit Application</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Team Testimonials 
    <section class="section team-testimonials bg-secondary">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">What Our Team Says</h2>
          <p class="section-subtitle">Hear from our team members about their experience at CloudIgnitia</p>
        </div>
        
        <div class="testimonials-grid">
          <div class="testimonial-card fade-in">
            <div class="testimonial-content">
              <p>"Working at CloudIgnitia has been incredible. The level of innovation and the impact we make on clients is truly rewarding. Plus, the team is amazing to work with!"</p>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Sarah Chen">
              </div>
              <div class="author-info">
                <span class="author-name">Sarah Chen</span>
                <span class="author-role">Senior Cloud Engineer</span>
                <span class="author-tenure">2 years at CloudIgnitia</span>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card fade-in">
            <div class="testimonial-content">
              <p>"The learning opportunities here are endless. I've grown more in my first year than I did in my previous three years elsewhere. The mentorship is top-notch."</p>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">
                <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Marcus Rodriguez">
              </div>
              <div class="author-info">
                <span class="author-name">Marcus Rodriguez</span>
                <span class="author-role">DevOps Specialist</span>
                <span class="author-tenure">1 year at CloudIgnitia</span>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card fade-in">
            <div class="testimonial-content">
              <p>"The work-life balance is fantastic. I can work remotely, have flexible hours, and still deliver impactful work. It's the best of both worlds."</p>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Emily Watson">
              </div>
              <div class="author-info">
                <span class="author-name">Emily Watson</span>
                <span class="author-role">Product Manager</span>
                <span class="author-tenure">3 years at CloudIgnitia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content fade-in">
          <h2>Ready to Join Our Team?</h2>
          <p style="color:white;">Don't see a position that fits? We're always looking for talented individuals to join our mission.</p>
          <div class="cta-buttons">
            <a href="#open-positions" class="btn btn-primary">View All Positions</a>
            <a href="javascript:void(0)" class="btn btn-secondary" onclick="navigateTo('contact')">Get In Touch</a>
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
  `,z()}function z(){const i=[{id:1,title:"Senior Cloud Engineer",department:"engineering",location:"remote",type:"full-time",experience:"5+ years",description:"Lead cloud infrastructure projects and mentor junior engineers in AWS, Azure, and GCP environments.",requirements:["5+ years cloud engineering experience","AWS/Azure/GCP certifications","Kubernetes expertise","Infrastructure as Code (Terraform)"],salary:"$120k - $160k"},{id:2,title:"DevOps Specialist",department:"devops",location:"san-francisco",type:"full-time",experience:"3+ years",description:"Build and maintain CI/CD pipelines, automate deployments, and optimize development workflows.",requirements:["3+ years DevOps experience","Docker & Kubernetes","CI/CD pipeline expertise","Monitoring & logging tools"],salary:"$100k - $140k"},{id:3,title:"Full Stack Developer",department:"engineering",location:"remote",type:"full-time",experience:"4+ years",description:"Develop modern web applications using React, Node.js, and cloud-native architectures.",requirements:["4+ years full-stack development","React & Node.js expertise","Database design","API development"],salary:"$110k - $150k"},{id:4,title:"Sales Engineer",department:"sales",location:"new-york",type:"full-time",experience:"3+ years",description:"Bridge technical solutions with customer needs, conduct demos, and support the sales process.",requirements:["3+ years technical sales","Cloud technology knowledge","Excellent communication","Customer-facing experience"],salary:"$90k - $130k + commission"},{id:5,title:"Marketing Manager",department:"marketing",location:"remote",type:"full-time",experience:"4+ years",description:"Lead digital marketing campaigns, content strategy, and brand development for B2B audiences.",requirements:["4+ years B2B marketing","Digital marketing expertise","Content creation","Analytics & reporting"],salary:"$85k - $115k"},{id:6,title:"Customer Success Engineer",department:"support",location:"london",type:"full-time",experience:"2+ years",description:"Ensure customer success through technical support, onboarding, and relationship management.",requirements:["2+ years customer success","Technical background","Problem-solving skills","Communication excellence"],salary:"£60k - £80k"},{id:7,title:"Cloud Security Analyst",department:"engineering",location:"remote",type:"full-time",experience:"3+ years",description:"Implement security best practices, conduct audits, and ensure compliance across cloud environments.",requirements:["3+ years security experience","Cloud security expertise","Compliance knowledge","Security certifications"],salary:"$105k - $145k"},{id:8,title:"Data Engineer Intern",department:"engineering",location:"san-francisco",type:"internship",experience:"0-1 years",description:"Support data pipeline development and analytics projects while learning from senior engineers.",requirements:["Computer Science student","Python/SQL knowledge","Data processing interest","Learning mindset"],salary:"$25/hour"}];f(i),R(i),B()}function f(i){const a=document.getElementById("jobs-grid");a&&(a.innerHTML=i.map(e=>`
     <div class="job-card fade-in" data-department="${e.department}" data-location="${e.location}" data-type="${e.type}">
      <div class="job-header">
        <div class="job-title-section">
          <h4 class="job-title">${e.title}</h4>
           <div class="job-meta">
            <span class="job-department">${e.department.charAt(0).toUpperCase()+e.department.slice(1)}</span>
          <!--  <span class="job-location">${H(e.location)}</span> -->
            <span class="job-type">${W(e.type)}</span>
          </div> 
        </div>
        <!-- <div class="job-salary">${e.salary}</div> -->
      </div>
      
      <div class="job-description">
        <p>${e.description}</p>
      </div>
      
      <div class="job-requirements">
        <h5>Key Requirements:</h5>
        <ul>
          ${e.requirements.map(t=>`<li>${t}</li>`).join("")}
        </ul>
      </div>
      
      <div class="job-actions">
        <span class="job-experience">${e.experience} experience</span>
        <button class="btn btn-primary" onclick="openApplicationModal('${e.title}', ${e.id})">Apply Now</button>
      </div>
    </div>
  `).join(""))}function H(i){return{remote:"Remote","san-francisco":"San Francisco, CA","new-york":"New York, NY",london:"London, UK"}[i]||i}function W(i){return{"full-time":"Full-time","part-time":"Part-time",contract:"Contract",internship:"Internship"}[i]||i}function R(i){const a=document.getElementById("department-filter"),e=document.getElementById("location-filter"),t=document.getElementById("type-filter");if(!a||!e||!t)return;function s(){const o=a.value,n=e.value,l=t.value,c=i.filter(v=>(o==="all"||v.department===o)&&(n==="all"||v.location===n)&&(l==="all"||v.type===l));f(c)}a.addEventListener("change",s),e.addEventListener("change",s),t.addEventListener("change",s)}function B(){document.getElementById("application-modal");const i=document.getElementById("application-form");i&&i.addEventListener("submit",async a=>{a.preventDefault();const e=new FormData(i);Object.fromEntries(e);const t=i.querySelector('button[type="submit"]'),s=t.textContent;t.textContent="Submitting...",t.disabled=!0;try{await new Promise(o=>setTimeout(o,2e3)),h("Thank you for your application! We have received your submission and will review it shortly. You can expect to hear from us within 5-7 business days."),b(),i.reset()}catch(o){console.error("Application submission error:",o),h("Thank you for your application! We have received your submission.")}finally{t.textContent=s,t.disabled=!1}})}function G(i,a){const e=document.getElementById("application-modal"),t=document.getElementById("modal-job-title");e&&t&&(t.textContent=`Apply for ${i}`,e.style.display="flex",document.body.style.overflow="hidden")}function b(){const i=document.getElementById("application-modal");i&&(i.style.display="none",document.body.style.overflow="auto")}function h(i){document.querySelectorAll(".success-notification").forEach(t=>t.remove());const e=document.createElement("div");e.className="success-notification",e.innerHTML=`
    <div class="notification-content">
      <div class="notification-icon">✅</div>
      <div class="notification-text">${i}</div>
      <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
    </div>
  `,document.body.appendChild(e),setTimeout(()=>{e.parentElement&&e.remove()},8e3)}window.openApplicationModal=G;window.closeApplicationModal=b;document.addEventListener("DOMContentLoaded",()=>{r.addRoute("home",i=>{i.innerHTML=`
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

      ${A()}

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
    `,r.initializePageFeatures()}),r.addRoute("services",x),r.addRoute("about",M),r.addRoute("contact",I),r.addRoute("cloud-computing",P),r.addRoute("devops",q),r.addRoute("web-development",E),r.addRoute("machine-learning",O),r.addRoute("careers",F),r.navigate("home"),window.initializeAnimations=C,window.toggleMobileMenu=function(){const i=document.querySelector(".nav-menu"),a=document.querySelector(".mobile-menu-toggle");if(i&&a){i.classList.toggle("active"),a.classList.toggle("active");const e=a.querySelector(".hamburger-icon");e&&(e.textContent=i.classList.contains("active")?"✕":"☰")}},document.addEventListener("click",i=>{if(i.target.classList.contains("nav-link")||i.target.classList.contains("btn")){const a=document.querySelector(".nav-menu"),e=document.querySelector(".mobile-menu-toggle"),t=e?.querySelector(".hamburger-icon");a&&a.classList.contains("active")&&(a.classList.remove("active"),e?.classList.remove("active"),t&&(t.textContent="☰"))}}),document.addEventListener("click",i=>{const a=document.querySelector(".nav-menu"),e=document.querySelector(".mobile-menu-toggle"),t=document.querySelector(".nav-container");if(a&&a.classList.contains("active")&&!t?.contains(i.target)){a.classList.remove("active"),e?.classList.remove("active");const s=e?.querySelector(".hamburger-icon");s&&(s.textContent="☰")}})});
