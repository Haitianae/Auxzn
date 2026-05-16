// //React code uses bootstrap without the app.css
// import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../App.css";
// import AuxznLogo from "../Assets/Images/Auxznlogo.png"

// export default function Navbar() {
//   return (
//     <BsNavbar expand="lg" sticky="top" className="app-navbar">
//       <Container>
//         <BsNavbar.Brand href="/" className="app-navbar__brand">
//           <img
//           src={AuxznLogo}
//             alt="AuxznLogo"
//             className="app-navbar__logo-img"
//             width={36}
//             height={36}
//           />
//         </BsNavbar.Brand>
//         <BsNavbar.Toggle aria-controls="main-navbar" className="app-navbar__toggle" />
//         <BsNavbar.Collapse id="main-navbar">
//           <Nav className="ms-auto align-items-lg-center gap-lg-1">
//             <Nav.Link href="/" className="app-navbar__link text-center text-lg-start">Home</Nav.Link>
//             <Nav.Link href="/about" className="app-navbar__link text-center text-lg-start">About Us</Nav.Link>
//             <Nav.Link href="/products" className="app-navbar__link text-center text-lg-start">Product</Nav.Link>
//             <Nav.Link href="/blogs" className="app-navbar__link text-center text-lg-start">Blogs</Nav.Link>
//             <Nav.Link href="/contact" className="app-navbar__cta text-center text-lg-start">Contact Us</Nav.Link>
//           </Nav>
//         </BsNavbar.Collapse>
//       </Container>
//     </BsNavbar>
//   );
// }

// React Bootstrap Navbar with HashRouter support

import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import { NavLink } from "react-router-dom";

import "../App.css";

import AuxznLogo from "../Assets/Images/Auxznlogo.png";

export default function Navbar() {
  return (
    <BsNavbar expand="lg" sticky="top" className="app-navbar">
      <Container>
        {/* LOGO */}
        <BsNavbar.Brand as={NavLink} to="/" className="app-navbar__brand">
          <img
            src={AuxznLogo}
            alt="AuxznLogo"
            className="app-navbar__logo-img"
            width={36}
            height={36}
          />
        </BsNavbar.Brand>

        {/* MOBILE TOGGLE */}
        <BsNavbar.Toggle
          aria-controls="main-navbar"
          className="app-navbar__toggle"
        />

        {/* NAVIGATION */}
        <BsNavbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-lg-center gap-lg-1">
            <Nav.Link
              as={NavLink}
              to="/"
              end
              className="app-navbar__link text-center text-lg-start"
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/products"
              className="app-navbar__link text-center text-lg-start"
            >
              Products
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/about"
              className="app-navbar__link text-center text-lg-start"
            >
              About Us
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/blogs"
              className="app-navbar__link text-center text-lg-start"
            >
              Blogs
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/contact"
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
