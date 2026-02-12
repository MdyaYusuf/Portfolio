import './About.css';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';

export const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        <div className="about-text-column">
          <h2>About <span className="text-highlight">Me</span></h2>
          
          <div className="about-bio">
            <p>
              As a passionate Full-Stack Developer, I specialize in architecting scalable web solutions 
              and data-driven applications.
            </p>

            <p>
              My backend expertise is grounded in <strong>C#, .NET, and Entity Framework</strong>, 
              where I employ both code-first and database-first approaches to manage complex SQL architectures 
              and business logic.
            </p>

            <p>
              On the frontend, I utilize core technologies like <strong>HTML, CSS, and JavaScript</strong> alongside 
              modern frameworks like <strong>React and React Native</strong> to build responsive, user-friendly interfaces.
            </p>

            <p>
              I am experienced in the full software lifecycle from engineering secure financial ecosystems 
              (3D Secure) and orchestrating deployments in Linux environments to conducting cross-platform testing. 
              Furthermore, I apply SEO strategies to drive product visibility and maintain professional English 
              proficiency for effective global collaboration.
            </p>
          </div>
        </div>

        <div className="skills-column">
          
          <div className="skill-category">
            <h3><StorageIcon fontSize="small" className="text-highlight" /> Backend & Database</h3>
            <div className="skill-list">
              <span className="skill-item">C#</span>
              <span className="skill-item">.NET</span>
              <span className="skill-item">Entity Framework</span>
              <span className="skill-item">Web API</span>
              <span className="skill-item">Relational Databases</span>
              <span className="skill-item">Redis</span>
              <span className="skill-item">Elasticsearch</span>
              <span className="skill-item">JavaScript</span>
              <span className="skill-item">Express.js</span>
              <span className="skill-item">Payment Systems</span>
            </div>
          </div>

          <div className="skill-category">
            <h3><CodeIcon fontSize="small" className="text-highlight" /> Frontend & Mobile</h3>
            <div className="skill-list">
              <span className="skill-item">HTML/CSS</span>
              <span className="skill-item">JavaScript</span>
              <span className="skill-item">TypeScript</span>
              <span className="skill-item">React.js</span>
              <span className="skill-item">React Native</span>
              <span className="skill-item">jQuery</span>
              <span className="skill-item">Bootstrap</span>
              <span className="skill-item">Material UI</span>
              <span className="skill-item">MVC</span>
            </div>
          </div>

          <div className="skill-category">
            <h3><TerminalIcon fontSize="small" className="text-highlight" /> DevOps & Tools</h3>
            <div className="skill-list">
              <span className="skill-item">Git / GitHub</span>
              <span className="skill-item">Postman</span>
              <span className="skill-item">Docker</span>
              <span className="skill-item">Linux</span>
              <span className="skill-item">Visual Studio</span>
              <span className="skill-item">Visual Studio Code</span>
              <span className="skill-item">Canva</span>
              <span className="skill-item">SEO Strategy</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};