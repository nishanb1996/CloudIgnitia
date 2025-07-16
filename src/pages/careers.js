export function renderCareersPage(container) {
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
  `
  
  // Initialize careers page functionality
  initializeCareersPage()
}

function initializeCareersPage() {
  // Job listings data
  const jobListings = [
    {
      id: 1,
      title: "Senior Cloud Engineer",
      department: "engineering",
      location: "remote",
      type: "full-time",
      experience: "5+ years",
      description: "Lead cloud infrastructure projects and mentor junior engineers in AWS, Azure, and GCP environments.",
      requirements: ["5+ years cloud engineering experience", "AWS/Azure/GCP certifications", "Kubernetes expertise", "Infrastructure as Code (Terraform)"],
      salary: "$120k - $160k"
    },
    {
      id: 2,
      title: "DevOps Specialist",
      department: "devops",
      location: "san-francisco",
      type: "full-time",
      experience: "3+ years",
      description: "Build and maintain CI/CD pipelines, automate deployments, and optimize development workflows.",
      requirements: ["3+ years DevOps experience", "Docker & Kubernetes", "CI/CD pipeline expertise", "Monitoring & logging tools"],
      salary: "$100k - $140k"
    },
    {
      id: 3,
      title: "Full Stack Developer",
      department: "engineering",
      location: "remote",
      type: "full-time",
      experience: "4+ years",
      description: "Develop modern web applications using React, Node.js, and cloud-native architectures.",
      requirements: ["4+ years full-stack development", "React & Node.js expertise", "Database design", "API development"],
      salary: "$110k - $150k"
    },
    {
      id: 4,
      title: "Sales Engineer",
      department: "sales",
      location: "new-york",
      type: "full-time",
      experience: "3+ years",
      description: "Bridge technical solutions with customer needs, conduct demos, and support the sales process.",
      requirements: ["3+ years technical sales", "Cloud technology knowledge", "Excellent communication", "Customer-facing experience"],
      salary: "$90k - $130k + commission"
    },
    {
      id: 5,
      title: "Marketing Manager",
      department: "marketing",
      location: "remote",
      type: "full-time",
      experience: "4+ years",
      description: "Lead digital marketing campaigns, content strategy, and brand development for B2B audiences.",
      requirements: ["4+ years B2B marketing", "Digital marketing expertise", "Content creation", "Analytics & reporting"],
      salary: "$85k - $115k"
    },
    {
      id: 6,
      title: "Customer Success Engineer",
      department: "support",
      location: "london",
      type: "full-time",
      experience: "2+ years",
      description: "Ensure customer success through technical support, onboarding, and relationship management.",
      requirements: ["2+ years customer success", "Technical background", "Problem-solving skills", "Communication excellence"],
      salary: "£60k - £80k"
    },
    {
      id: 7,
      title: "Cloud Security Analyst",
      department: "engineering",
      location: "remote",
      type: "full-time",
      experience: "3+ years",
      description: "Implement security best practices, conduct audits, and ensure compliance across cloud environments.",
      requirements: ["3+ years security experience", "Cloud security expertise", "Compliance knowledge", "Security certifications"],
      salary: "$105k - $145k"
    },
    {
      id: 8,
      title: "Data Engineer Intern",
      department: "engineering",
      location: "san-francisco",
      type: "internship",
      experience: "0-1 years",
      description: "Support data pipeline development and analytics projects while learning from senior engineers.",
      requirements: ["Computer Science student", "Python/SQL knowledge", "Data processing interest", "Learning mindset"],
      salary: "$25/hour"
    }
  ]

  // Render job listings
  renderJobListings(jobListings)
  
  // Initialize filters
  initializeJobFilters(jobListings)
  
  // Initialize application modal
  initializeApplicationModal()
}

function renderJobListings(jobs) {
  const jobsGrid = document.getElementById('jobs-grid')
  if (!jobsGrid) return
  
  jobsGrid.innerHTML = jobs.map(job => `
     <div class="job-card fade-in" data-department="${job.department}" data-location="${job.location}" data-type="${job.type}">
      <div class="job-header">
        <div class="job-title-section">
          <h4 class="job-title">${job.title}</h4>
           <div class="job-meta">
            <span class="job-department">${job.department.charAt(0).toUpperCase() + job.department.slice(1)}</span>
          <!--  <span class="job-location">${formatLocation(job.location)}</span> -->
            <span class="job-type">${formatType(job.type)}</span>
          </div> 
        </div>
        <!-- <div class="job-salary">${job.salary}</div> -->
      </div>
      
      <div class="job-description">
        <p>${job.description}</p>
      </div>
      
      <div class="job-requirements">
        <h5>Key Requirements:</h5>
        <ul>
          ${job.requirements.map(req => `<li>${req}</li>`).join('')}
        </ul>
      </div>
      
      <div class="job-actions">
        <span class="job-experience">${job.experience} experience</span>
        <button class="btn btn-primary" onclick="openApplicationModal('${job.title}', ${job.id})">Apply Now</button>
      </div>
    </div>
  `).join('')
}

function formatLocation(location) {
  const locationMap = {
    'remote': 'Remote',
    'san-francisco': 'San Francisco, CA',
    'new-york': 'New York, NY',
    'london': 'London, UK'
  }
  return locationMap[location] || location
}

function formatType(type) {
  const typeMap = {
    'full-time': 'Full-time',
    'part-time': 'Part-time',
    'contract': 'Contract',
    'internship': 'Internship'
  }
  return typeMap[type] || type
}

function initializeJobFilters(jobs) {
  const departmentFilter = document.getElementById('department-filter')
  const locationFilter = document.getElementById('location-filter')
  const typeFilter = document.getElementById('type-filter')
  
  if (!departmentFilter || !locationFilter || !typeFilter) return
  
  function filterJobs() {
    const department = departmentFilter.value
    const location = locationFilter.value
    const type = typeFilter.value
    
    const filteredJobs = jobs.filter(job => {
      return (department === 'all' || job.department === department) &&
             (location === 'all' || job.location === location) &&
             (type === 'all' || job.type === type)
    })
    
    renderJobListings(filteredJobs)
  }
  
  departmentFilter.addEventListener('change', filterJobs)
  locationFilter.addEventListener('change', filterJobs)
  typeFilter.addEventListener('change', filterJobs)
}

function initializeApplicationModal() {
  const modal = document.getElementById('application-modal')
  const form = document.getElementById('application-form')
  
  if (!form) return
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    
    const submitButton = form.querySelector('button[type="submit"]')
    const originalText = submitButton.textContent
    
    submitButton.textContent = 'Submitting...'
    submitButton.disabled = true
    
    try {
      // Simulate application submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Show success message
      showSuccessMessage('Thank you for your application! We have received your submission and will review it shortly. You can expect to hear from us within 5-7 business days.')
      
      // Close modal and reset form
      closeApplicationModal()
      form.reset()
    } catch (error) {
      console.error('Application submission error:', error)
      showSuccessMessage('Thank you for your application! We have received your submission.')
    } finally {
      submitButton.textContent = originalText
      submitButton.disabled = false
    }
  })
}

function openApplicationModal(jobTitle, jobId) {
  const modal = document.getElementById('application-modal')
  const modalTitle = document.getElementById('modal-job-title')
  
  if (modal && modalTitle) {
    modalTitle.textContent = `Apply for ${jobTitle}`
    modal.style.display = 'flex'
    document.body.style.overflow = 'hidden'
  }
}

function closeApplicationModal() {
  const modal = document.getElementById('application-modal')
  if (modal) {
    modal.style.display = 'none'
    document.body.style.overflow = 'auto'
  }
}

function showSuccessMessage(message) {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.success-notification')
  existingNotifications.forEach(notification => notification.remove())
  
  // Create new notification
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
  
  // Auto remove after 8 seconds (longer for application confirmations)
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove()
    }
  }, 8000)
}

// Make functions globally available
window.openApplicationModal = openApplicationModal
window.closeApplicationModal = closeApplicationModal