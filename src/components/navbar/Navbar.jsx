import React from "react";
import "./Navbar.css";
import {Link} from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbarContainer">
      <ul className="linksContainer">
        <li className="links">
            <Link to="#Header" smooth={true} duration={500}>Home</Link>
        </li>
        <li className="links">
            <Link to="About" smooth={true} duration={500}>About</Link>
        </li>
        <li className="links">
            <Link to="Projects" smooth={true} duration={500}>Project</Link>
        </li>
        <li className="links">
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

