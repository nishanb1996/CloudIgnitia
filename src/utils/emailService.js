// Email service using EmailJS
export class EmailService {
  constructor() {
    // Updated with actual EmailJS credentials
    this.serviceId = 'service_wkhtl5s' // Get from EmailJS dashboard
    this.templateId = 'template_uem5cjd' // Get from EmailJS dashboard  
    this.publicKey = 'roIaQ8s4L8cOM_Mr_' // Get from EmailJS dashboard
    this.initialized = false
  }

  async initialize() {
    if (this.initialized) return

    try {
      // Load EmailJS library if not already loaded
      if (!window.emailjs) {
        await this.loadEmailJS()
      }
      
      if (window.emailjs && this.publicKey !== 'your_public_key') {
        window.emailjs.init(this.publicKey)
        this.initialized = true
        console.log('EmailJS initialized successfully')
      }
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error)
    }
  }

  loadEmailJS() {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js'
      script.onload = resolve
      script.onerror = reject
      document.head.appendChild(script)
    })
  }

  async sendContactForm(formData) {
    // EmailJS is now properly configured
    if (!this.initialized) {
      await this.initialize()
      // Wait for EmailJS to be ready
      await new Promise(resolve => setTimeout(resolve, 1000))
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not specified',
        phone: formData.phone || 'Not provided',
        service: formData.service || 'General inquiry',
        message: formData.message || 'No message provided',
        reply_to: formData.email,
        // Add timestamp
        submitted_at: new Date().toLocaleString()
      }

      const response = await window.emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams
      )

      console.log('Email sent successfully:', response)
      return { success: true, response }
    } catch (error) {
      console.error('Email send failed:', error)
      return { success: false, error }
    }
  }

  // Fallback method using Formspree (alternative email service)
  async sendViaFormspree(formData) {
    try {
      // Replace 'your-form-id' with your Formspree form ID
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          _subject: `New contact form submission from ${formData.name}`
        })
      })

      if (response.ok) {
        return { success: true }
      } else {
        throw new Error('Failed to send via Formspree')
      }
    } catch (error) {
      console.error('Formspree send failed:', error)
      return { success: false, error }
    }
  }
}

// Global email service instance
export const emailService = new EmailService()