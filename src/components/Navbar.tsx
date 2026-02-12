import { useState } from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar glass">
      <div className="nav-container">
        <a href="#" className="logo">
          <div className="logo-icon">&lt;/&gt;</div>
          <span>Muhammed Yusuf<span className="text-highlight"> Aydın</span></span>
        </a>
        
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About</a>
          <a href="#journey" className="nav-link" onClick={() => setIsOpen(false)}>Journey</a>
          <a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
};