import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  // Function to update form data when user types
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Function to handle form submission and send email
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create email content
    const emailSubject = encodeURIComponent(formData.subject)
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    )
    
    // Create mailto link
    const mailtoLink = `mailto:dash9309@gmail.com?subject=${emailSubject}&body=${emailBody}`
    
    // Open email client
    window.open(mailtoLink)
    
    // Show success message
    alert('Opening your email client to send the message!')
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/ashutosh-dash3' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ashutosh-dash-a48288255/?trk=opento_sprofile_topcard' },
    { name: 'Instagram', url: 'https://www.instagram.com/ashutos_h_03/'},
    { name: 'Email', url: 'mailto:dash9309@gmail.com' }
  ]

  return (
    <div className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm always excited to connect with other developers and discuss Java, MERN stack, or any tech topics!
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm currently looking for opportunities to work on interesting projects 
              and collaborate with other developers. If you want to discuss 
              MERN stack projects, or just share knowledge, I'd love to connect!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Bhubaneswar, Odisha</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>dash9309@gmail.com</p>
                </div>
              </div>
              
            </div>
            
            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span>{social.icon}</span>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
