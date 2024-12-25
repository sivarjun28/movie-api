import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGoogle, faGmail } from '@fortawesome/free-brands-svg-icons';
import "./tmdb.css";


const Footer = () => {
  return (
    <footer className='footerStyle'>
      <p>&copy; 2024 | All rights reserved</p>
      <p>Contact: <a href="+91 9515690979">+91 9515690979</a></p>
      <div className="socialIcons">
        <a href="https://www.linkedin.com/in/sivarjun-podamekala-b35a66237/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.instagram.com/_arjun_yadav_18/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="mailto:your-email@gmail.com">
          <FontAwesomeIcon icon={faGoogle} size="2x" />
        </a>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: 'gold', 
  color: '#000', 
  textAlign: 'center',
  padding: '1rem',
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
};

export default Footer;
