import { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const projects = [
    {
      id: 1,
      title: "E-Commerce APP",
      description: "A frontend project. Features include responsive design, clean UI. This was my first real world project and taught me a lot about frontend design.",
      image: "🛒",
      technologies: ["HTML", "CSS", "JS"],
      liveUrl: "https://ashutosh-dash3.github.io/Nike-Store/",
      githubUrl: "https://github.com/ashutosh-dash3/Nike-Store",
      featured: true
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "This portfolio website built with React and CSS. Features include responsive design, dark mode toggle, and smooth scrolling. My first attempt at building a complete website from scratch.",
      image: "💼",
      technologies: ["React", "CSS3", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 3,
      title: "Text Analyzer (React)",
      description: "A very basic level application built with React. Users can give any text input to the field and do some operation with the text as per the buttons. Learned how react actually works!",
      image: "📝",
      technologies: ["React"],
      liveUrl: "https://ashutosh-dash3.github.io/TextUtil/",
      githubUrl: "https://github.com/ashutosh-dash3/TextUtil",
      featured: true
    }
  ]

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    )
  }

  const currentProject = projects[currentProjectIndex]

  return (
    <div className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some projects I've built with Java and the MERN stack
        </p>
        
        <div className="project-navigation">
          <button 
            className="nav-arrow nav-arrow-left" 
            onClick={prevProject}
            aria-label="Previous project"
          >
            ←
          </button>
          
          <div className="project-display">
            <div className={`project-card ${currentProject.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <div className="project-icon">
                  <span>{currentProject.image}</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{currentProject.title}</h3>
                <p className="project-description">{currentProject.description}</p>
                <div className="project-technologies">
                  {currentProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={currentProject.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={currentProject.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <button 
            className="nav-arrow nav-arrow-right" 
            onClick={nextProject}
            aria-label="Next project"
          >
            →
          </button>
        </div>
        
        <div className="project-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentProjectIndex ? 'active' : ''}`}
              onClick={() => setCurrentProjectIndex(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
