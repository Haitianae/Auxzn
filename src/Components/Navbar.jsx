import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import { NavLink, useLocation } from "react-router-dom";

import { useEffect, useState, useRef } from "react";

import "../App.css";

import AuxznLogo from "../Assets/Images/Auxznlogo.png";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const location = useLocation();

  const collapseRef = useRef(null);

  /* SCROLL TO TOP */
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setExpanded(false);
  }, [location.pathname]);

  /* CLICK OUTSIDE CLOSE */
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        expanded &&
        collapseRef.current &&
        !collapseRef.current.contains(event.target)
      ) {
        setExpanded(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded]);

  const closeMenu = () => {
    setExpanded(false);
  };

  return (
    <BsNavbar
      expand="lg"
      sticky="top"
      expanded={expanded}
      className="app-navbar"
    >
      <Container ref={collapseRef}>
        {/* LOGO */}
        <BsNavbar.Brand
          as={NavLink}
          to="/"
          className="app-navbar__brand"
          onClick={closeMenu}
        >
          <img
            src={AuxznLogo}
            alt="AuxznLogo"
            className="app-navbar__logo-img"
            width={36}
            height={36}
          />
        </BsNavbar.Brand>

        {/* TOGGLE */}
        <BsNavbar.Toggle
          aria-controls="main-navbar"
          className="app-navbar__toggle"
          onClick={() => setExpanded((prev) => !prev)}
        />

        {/* NAVIGATION */}
        <BsNavbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-lg-center gap-lg-1">
            <Nav.Link
              as={NavLink}
              to="/"
              end
              onClick={closeMenu}
              className="app-navbar__link text-center text-lg-start"
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/products"
              onClick={closeMenu}
              className="app-navbar__link text-center text-lg-start"
            >
              Products
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/about"
              onClick={closeMenu}
              className="app-navbar__link text-center text-lg-start"
            >
              About Us
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/blogs"
              onClick={closeMenu}
              className="app-navbar__link text-center text-lg-start"
            >
              Blogs
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/contact"
              onClick={closeMenu}
              className="app-navbar__cta text-center text-lg-start"
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}
