import './App.css'

const projects = [
  {
    title: 'Project One',
    description: 'Write one sentence about a small project you built or are learning from.',
    stack: 'React, CSS',
  },
  {
    title: 'Project Two',
    description: 'Use this space to explain the problem, what you made, or one result you are proud of.',
    stack: 'JavaScript, API',
  },
]

const skills = ['HTML', 'CSS', 'JavaScript', 'React']

function App() {
  return (
    <main className="portfolio-shell">
      <section className="hero">
        <p className="eyebrow">Super amazing real developer</p>
        <h1>Bhavnoor Saroya</h1>
        <p className="hero-copy">
          I&apos;m a developer learning how to build clean, useful
          projects with modern build and deployment tooling.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">
            My Projects
          </a>
          <a href="#contact" className="button button-secondary">
            Contact Me
          </a>
        </div>
      </section>

      <section className="content-grid">
        <article className="panel panel-intro" id="about">
          <p className="section-label">About Me</p>
          <h2>Who Am I</h2>
          <p>
            I started CST right after Highschool in 2022, I grew up in se12 doing Hackathons for fun and sleeping in Bruce lectures! Computing people are my people.
          </p>
        </article>

        <article className="panel">
          <p className="section-label">Skills</p>
          <h2>Tools I use</h2>
          {/* notice how we loop through the skills with a map so we don't have to type them manually */}
          <div className="tag-list">
            {skills.map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="panel" id="projects">
        <p className="section-label">Projects</p>
        <div className="section-heading">
          <h2>A couple of example builds</h2>
          <p>Replace these cards with your own.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <p className="project-stack">{project.stack}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel contact-panel" id="contact">
        <div>
          <p className="section-label">Contact</p>
          <h2>How to reach me</h2>
          <p>
            Add your email, LinkedIn, GitHub, or any other link you want people
            to use.
          </p>
        </div>
        <div className="contact-card">
          <p>Email</p>
          <a href="mailto:yourname@email.com">yourname@email.com</a>
          <p>GitHub</p>
          <a href="https://github.com/yourusername">github.com/yourusername</a>
        </div>
      </section>
    </main>
  )
}

export default App
