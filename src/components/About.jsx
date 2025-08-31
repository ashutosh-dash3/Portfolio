import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hey there! I’m Ashutosh, a Java programmer turned web enthusiast. I began my coding journey with Java over two years ago, writting clean codes, and recently expanded my focus to modern web development with the MERN stack.
            </p>
            <p>
              Currently, I’m learning React, Node.js, Express.js, and MongoDB — enjoying the transition from Java to JavaScript by working on small projects, following tutorials, and sharpening my skills through doing an internship at <a href="https://www.seeree.in/">Seeree Pvt Ltd</a>, developing small apps, platforms like YouTube, reels on Instagram and taking advice from my friends and seniors.
            </p>
            <p>
              Beyond coding, I love exploring new places, reading books, listening podcasts, exploring new places near me, cooking and playing video games.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h3>1.5+</h3>
                <p>Coding Experience</p>
              </div>
              <div className="stat">
                <h3>3</h3>
                <p>Projects Built</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
