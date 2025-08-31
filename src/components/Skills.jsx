import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming & Development",
      skills: [
        { name: "Java", level: 60 },
        { name: "HTML", level: 80 },
        { name: "CSS", level: 75 },
        { name: "JavaScript", level: 75 },
        { name: "Node.js", level: 60 },
        { name: "Express.js", level: 55 },
        { name: "React", level: 70 },
        { name: "MongoDB", level: 50 },
        { name: "REST APIs", level: 80 },
        // { name: "MySQL", level: 70 },
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 80 },
        { name: "Postman", level: 75 },
        { name: "Figma", level: 60 },
        { name: "VS Code", level: 85 },
        { name: "IntelliJ IDEA", level: 90 }
      ]
    }
  ]

  return (
    <div className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          Here are the technologies I work with and am currently learning
        </p>
        
        <div className="skills-content">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
