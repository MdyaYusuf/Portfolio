import './Contact.css';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Ready to <span className="text-highlight">Connect?</span></h2>
      <p className="contact-text">
        Whether you have a question, a project idea, or just want to say hi, 
        my inbox is always open.
      </p>

      <div className="contact-links">
        <a 
          href="mailto:myusufunpostakutusu@gmail.com" 
          className="contact-btn"
        >
          <EmailIcon className="contact-icon" />
          Say Hello
        </a>

        <a 
          href="https://github.com/mdyayusuf" 
          target="_blank" 
          rel="nofollow noreferrer" 
          className="contact-btn"
        >
          <GitHubIcon className="contact-icon" />
          GitHub
        </a>

        <a 
          href="https://linkedin.com/in/mdyayusuf" 
          target="_blank" 
          rel="nofollow noreferrer" 
          className="contact-btn"
        >
          <LinkedInIcon className="contact-icon" />
          LinkedIn
        </a>
      </div>

      <footer className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Muhammed Yusuf Aydın. Bringing your ideas and visions into reality.</p>
      </footer>
    </section>
  );
};