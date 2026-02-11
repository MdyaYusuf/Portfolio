import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar glass">
      <div className="nav-container">
        <a href="#" className="logo">
          <div className="logo-icon">&lt;/&gt;</div>
          <span>Muhammed Yusuf<span className="text-highlight"> Aydın</span></span>
        </a>
        
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};