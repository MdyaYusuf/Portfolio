import './Hero.css';
import profileImg from '../assets/profile.jpg'; 

export const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <span className="hero-label">Full-Stack Developer</span>
        
        <h1 className="hero-title">
          Architecting Scalable <br />
          <span className="text-gradient typewriter">Digital Solutions.</span>
        </h1>
        
        <p className="hero-subtitle">
          I architect complex systems and deliver end-to-end products that solve real business problems. 
          Focused on the <strong>full software lifecycle</strong> from engineering secure backend ecosystems 
          to crafting responsive user experiences regardless of the technology stack.
        </p>

        <div className="tech-stack">
          <span className="tech-badge">System Architecture</span>
          <span className="tech-badge">Full-Cycle Development</span>
          <span className="tech-badge">Secure Ecosystems</span>
          <span className="tech-badge">Performance Optimization</span>
          <span className="tech-badge">Cross-Platform</span>
        </div>
      </div>

      <div className="hero-image-wrapper">
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