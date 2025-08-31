import './Hero.css'

const Hero = () => {
  // Function to smoothly scroll to different sections when buttons are clicked
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Ashutosh_Dash_Resume_portfolio.pdf";
    link.download = "Ashutosh_Dash_Resume_portfolio.pdf";
    link.click();
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Ashutosh</span>
          </h1>
          <h2 className="hero-subtitle">MERN Stack Developer | Java programmer</h2>
          <p className="hero-description">
            I’m Ashutosh Dash, MERN Stack Developer and Java Programmer. I enjoy building responsive and user-friendly web applications, and I’m currently enhancing my skills by developing full-stack projects. Passionate about problem-solving and clean code, I aim to create impactful digital solutions.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              See My Projects
            </button>
            <button 
              className="btn btn-secondary"
              onClick={handleDownload}
            >
              Download CV
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-avatar">
            <div className="avatar-placeholder">
              <span>👨‍💻</span>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </div>
  )
}

export default Hero
