import './Projects.css';
import altyapiImg from '../assets/altyapi.png';
import antrenoryumImg from '../assets/antrenoryum.png';

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Altyapi.net",
    description: "A comprehensive sports facility management application designed to streamline club operations, ranging from training calendars and attendance to detailed performance tracking. The platform integrates 3D secure payment systems for safe transactions, financial reporting tools, and role-based staff authorization.",
    tech: [".NET", "PostgreSQL", "JQuery", "3D Secure", "Linux Deployment"],
    link: "https://altyapi.net/",
    image: altyapiImg
  },
  {
    title: "Antrenoryum",
    description: "A dynamic sports education marketplace designed to bridge the gap between professional trainers and individuals. The platform streamlines finding and booking private lessons across 50+ sports branches. Managed the full product lifecycle, SEO strategies, and content creation to drive growth.",
    tech: ["Product Management", "SEO", "Digital Marketing", "Startup Leadership"],
    link: "https://www.antrenoryum.com/",
    image: antrenoryumImg
  }
];

export const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h2 className="section-title">Selected <span className="text-highlight">Works</span></h2>
        <p className="section-subtitle">
          Bringing ideas to life and transforming visions into reality.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={index}>
            <div className="project-image-container">
               <img 
                 src={project.image} 
                 alt={project.title} 
                 className="project-img"
               />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.tech.map((t, i) => (
                  <span className="project-tag" key={i}>{t}</span>
                ))}
              </div>

              <div className="project-links">
                 <a 
                    href={project.link} 
                    target="_blank" 
                    rel="nofollow noreferrer" 
                    className="project-link link-primary"
                 >
                   View Project <span>→</span>
                 </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};