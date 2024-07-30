import { useState, useEffect } from "react";
import logo from "./logo.png";
import { useLocation } from 'react-router-dom';
import { FaHamburger } from "react-icons/fa";

const links = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Education", path: "#education" },
  { name: "Experience", path: "#experience" },
  { name: "Service", path: "#service" },
  { name: "Skills", path: "#skill" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

function Navbar() {
  const [shrink, setShrink] = useState(true);
  const [activeLink, setActiveLink] = useState("#home");

  const shrinkb = () => {
    setShrink(!shrink);
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setActiveLink(location.hash);
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; 
      let found = false;
      for (let link of links) {
        const section = document.querySelector(link.path);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveLink(link.path);
            found = true;
            break;
          }
        }
      }

      if (!found && window.scrollY === 0) {
        setActiveLink("#home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.hash]);

  return (
    <nav className="navcontainer">
      <div className="burgercomponent">
        <img className="logo" src={logo} alt="Logo" />
        <FaHamburger className="burg" onClick={shrinkb} />
      </div>
      <ul className={"navcomponent " + (shrink ? "hide" : "")}>
        {links.map((link) => (
          <li key={link.path} className="item">
            <a href={link.path} className={link.path === activeLink ? "activen" : ""}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
