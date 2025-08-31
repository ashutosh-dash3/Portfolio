import { useState } from 'react'
import './Navbar.css'

const Navbar = ({ activeSection, darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  const getThemeIcon = () => {
    return darkMode ? '☀️' : '🌙'
  }

  const getThemeLabel = () => {
    return darkMode ? 'Light' : 'Dark'
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span>Ashutosh.dev</span>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${getThemeLabel()} mode`}
            title={`Switch to ${getThemeLabel()} mode`}
          >
            {getThemeIcon()}
          </button>
        </div>

        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
