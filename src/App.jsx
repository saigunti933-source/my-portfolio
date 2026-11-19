
import {
  Mail,
  ArrowUpRight,
  ArrowDown,
  Code2,
  GraduationCap,
  Lightbulb,
  Users,
} from "lucide-react";

import "./App.css";

function App() {
  const github = "https://github.com/saigunti933-source";
  const email = "saigunti933@gmail.com";

  const projects = [
    {
      number: "01",
      name: "MERN CRUD Application",
      category: "FULL STACK DEVELOPMENT",
      description:
        "A full-stack application exploring how frontend and backend technologies work together to manage data.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      link: github,
    },
    {
      number: "02",
      name: "Movie REST API",
      category: "BACKEND DEVELOPMENT",
      description:
        "A REST API project built with Node.js, Express, and MongoDB to manage movie data using CRUD operations.",
      technologies: ["Node.js", "Express", "MongoDB", "Mongoose"],
      link: "https://github.com/saigunti933-source/mongoose-movie-app",
    },
    {
      number: "03",
      name: "MVC Authentication App",
      category: "WEB DEVELOPMENT",
      description:
        "An authentication project organized using the MVC architecture with separate models, controllers, and routes.",
      technologies: ["Node.js", "Express", "MongoDB", "MVC"],
      link: github,
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Python",
    "Git",
    "GitHub",
  ];

  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">
          S<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#work">Projects</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="nav-github"
        >
          GitHub <ArrowUpRight size={15} />
        </a>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="hero section-padding" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              STUDENT · DEVELOPER · ALWAYS LEARNING
            </p>

            <h1>
              Beyond learning,
              <br />
              into <span>building.</span>
            </h1>

            <p className="hero-description">
              Hello! I'm <strong>Gunti Siva Naga Sai</strong>, a student
              passionate about technology, web development, and turning
              creative ideas into practical digital experiences.
            </p>

            <div className="hero-buttons">
              <a href="#work" className="primary-button">
                Explore my work <ArrowUpRight size={17} />
              </a>

              <a href="#contact" className="secondary-button">
                Get in touch
              </a>
            </div>

            <div className="hero-socials">
              <a href={github} target="_blank" rel="noreferrer">
                <Code2 size={19} /> GitHub
              </a>

              <a href={`mailto:${email}`}>
                <Mail size={19} /> Email
              </a>
            </div>
          </div>

          <div className="hero-side">
            <div className="hero-decoration">
              <Code2 size={55} strokeWidth={1} />
            </div>

            <p className="side-note">
              CURIOUS BY NATURE. CREATIVE BY CHOICE.
            </p>

            <a href="#work" className="scroll-link">
              SCROLL TO EXPLORE <ArrowDown size={16} />
            </a>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="work-section section-padding" id="work">
          <div className="section-heading">
            <p className="eyebrow">01 / SELECTED WORK</p>

            <h2>Little ideas. Real-world builds.</h2>

            <p className="section-description">
              A collection of projects where I explore, experiment, and
              improve my development skills.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>{project.number}</span>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <ArrowUpRight size={21} />
                  </a>
                </div>

                <p className="project-category">{project.category}</p>

                <h3>{project.name}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View project <ArrowUpRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="about-section section-padding" id="about">
          <div className="section-heading">
            <p className="eyebrow">02 / A LITTLE ABOUT ME</p>

            <h2>
              A mind that questions.
              <br />
              A mindset that builds.
            </h2>
          </div>

          <div className="about-content">
            <div>
              <p>
                I'm Gunti Siva Naga Sai, a student interested in building
                useful and meaningful web applications. I enjoy learning
                how websites and applications work behind the scenes.
              </p>

              <p>
                My development journey includes exploring frontend
                technologies, backend development, databases, and
                full-stack application development.
              </p>

              <p>
                I believe every project is an opportunity to learn
                something new, solve a problem, and become a better
                developer.
              </p>
            </div>

            <div className="about-highlight">
              <Lightbulb size={30} />

              <h3>Always exploring.</h3>

              <p>
                Learning through practice, experimenting with ideas,
                and building one project at a time.
              </p>
            </div>
          </div>
        </section>

        {/* JOURNEY SECTION */}
        <section className="journey-section section-padding">
          <div className="section-heading">
            <p className="eyebrow">03 / MY APPROACH</p>

            <h2>Learning never pauses. Neither do I.</h2>
          </div>

          <p className="journey-intro">
            Every step in my journey helps me grow as a developer.
          </p>

          <div className="journey-grid">
            <div className="journey-card">
              <GraduationCap size={30} />
              <h3>Keep learning</h3>
              <p>
                Building a strong foundation in programming and
                understanding modern technologies.
              </p>
            </div>

            <div className="journey-card">
              <Code2 size={30} />
              <h3>Keep building</h3>
              <p>
                Turning concepts into projects and learning through
                practical development experience.
              </p>
            </div>

            <div className="journey-card">
              <Users size={30} />
              <h3>Keep growing</h3>
              <p>
                Improving problem-solving skills and staying open to
                feedback, ideas, and collaboration.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="skills-section section-padding" id="skills">
          <div className="section-heading">
            <p className="eyebrow">04 / MY TOOLKIT</p>
            <h2>Tools I work and learn with.</h2>
          </div>

          <div className="skills-list">
            {skills.map((skill) => (
              <span className="skill-item" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact-section section-padding" id="contact">
          <p className="eyebrow">05 / LET'S CONNECT</p>

          <h2>
            Have an idea?
            <br />
            Let's give it a <span>digital life.</span>
          </h2>

          <p className="contact-description">
            Interested in connecting, sharing ideas, or collaborating
            on a project? I'd love to hear from you.
          </p>

          <a href={`mailto:${email}`} className="primary-button">
            Say hello <Mail size={17} />
          </a>

          <div className="contact-socials">
            <a href={github} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={15} />
            </a>

            <a href={`mailto:${email}`}>
              Email <ArrowUpRight size={15} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">
          S<span>.</span>
        </a>

        <p>Designed and built by Gunti Siva Naga Sai.</p>

        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
