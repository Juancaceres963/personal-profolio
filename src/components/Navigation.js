/// Modelo numero 3 del dia 26/03 //

import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/img/Logo_JCcode.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Navigation = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigation = (section) => {
    setActiveLink(section);

    if (location.pathname !== "/") {
      navigate(`/#${section}`);
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `/#${section}`); // <- Esto actualiza la URL sin recargar
    }
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand
          onClick={() => {
            if (location.pathname !== "/") {
              navigate("/");
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <img style={{ width: 160 }} src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ marginLeft: 60 }}>
            <Nav.Link
              onClick={() => handleNavigation("skills")}
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
            >
              Skills
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavigation("projects")}
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
            >
              Projects
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavigation("contact")}
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
            >
              Contact
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/juan-caceres-orellana/"
                target="_blank"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/Juancaceres963" target="_blank">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/jc.code/" target="_blank">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <button
              className="vvd"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/juan-caceres-orellana/",
                  "_blank"
                )
              }
            >
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
