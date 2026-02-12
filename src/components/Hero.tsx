import './Hero.css';
import profileImg from '../assets/profile.jpg'; 

export const Hero = () => {
  const techBadges = [
    "System Design",
    "Scalable Web Architecture",
    "Full-Cycle Development",
    "End-to-End Product Delivery",
    "Problem Solving",
    "Agile Methodologies",
    "Security-First Mindset",
    "Clean & Maintainable Code",
    "Performance Optimization",
    "Secure Payment Systems",
    "CI/CD & Deployment",
    "Cross-Platform"
  ];

  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <span className="hero-label">Full-Stack Developer</span>
        
        <h1 className="hero-title">
          Bringing Your Ideas <br />
          <span className="text-gradient typewriter">And Visions Into Reality.</span>
        </h1>
        
        <p className="hero-subtitle">
          I bring your ideas and visions to the web, transforming concepts into 
          fully functional products. By <strong>architecting secure backend ecosystems </strong> 
          and <strong>crafting responsive user experiences</strong>, I deliver end-to-end 
          solutions that solve <strong>real business problems</strong>.
        </p>

        <div className="tech-stack">
          {techBadges.map((badge, index) => (
            <span 
              key={index} 
              className="tech-badge"
              style={{ animationDelay: `${0.2 + (index * 0.05)}s` }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-image-container">
        <div className="hero-glow"></div>
        <img 
          src={profileImg} 
          alt="Muhammed Yusuf Aydın" 
          className="hero-img" 
        />
      </div>
    </section>
  );
};