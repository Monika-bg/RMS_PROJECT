import React from "react";
import { FaInstagram, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left flex items-center">
            {/* Add the logo image directly from the public folder */}
            <img src="/logo.jpg" alt="Logo" className="h-10 mr-3" />
            <span>PALATE PLEASURES</span>
          </div>
          <div className="right">
            <p>Basavangudi, Bengaluru 560004</p>
            <p>Open: 09:00 AM - 12:00 AM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <div className="social-link">
              <FaInstagram />
              <a href="https://www.instagram.com/palate_plesears/" target="_blank" rel="noopener noreferrer"> @palate_plesears
              </a>
            </div>
            <div className="social-link">
              <FaGoogle />
              <a href="https://www.palateplesears.com" target="_blank" rel="noopener noreferrer">
                www.palateplesears.com
              </a>
            </div>
          </div>
          <div className="right">
            <p>
              For further details contact +91-6746442637
              <br />
              Email: palateplesears@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
