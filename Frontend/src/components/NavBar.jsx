import React, { useState } from "react";
import { data } from "../pages/restApi.json";
import { Link as ScrollLink } from "react-scroll";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import './logo.css';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleNavLinkClick = (link) => {
    if (link === "view-menu") {
      navigate("/view-menu"); // Navigate to /view-menu route
    } else {
      // Scroll to other sections
      // Adjust as per your scroll logic, I assume you already have it
      // You can use scrollToSection(link) or any appropriate function here
    }
    setShow(false); // Close the menu after navigating
  };

  return (
    <nav>
      <div className="logo">
        <img src="/logo.jpg" alt="Logo" className="logo-image" /> {/* Add your logo here */}
        PALATE PLEASERS
      </div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {data[0].navbarLinks.map((element) => (
            <ScrollLink
              to={element.link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              key={element.id}
              onClick={() => handleNavLinkClick(element.link)}
            >
              {element.title}
            </ScrollLink>
          ))}
          <ScrollLink
            to="view-menu"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            onClick={() => handleNavLinkClick("view-menu")}
          >
            VIEW MENU
          </ScrollLink>
        </div>
        <NavLink to="/login" className="menuBtn">
          Order Online
        </NavLink>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
