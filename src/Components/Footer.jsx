// import React from "react";
// import AuxznLogo from "../Assets/Images/Auxznlogo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import {
//   faFacebookF,
//   faInstagram,
//   faLinkedinIn,
//   faWhatsapp,
// } from "@fortawesome/free-brands-svg-icons";

// import "../App.css";

// export default function Footer() {
//   return (
//     <footer className="footer-section mt-5">
//       <div className="container">
//         <div className="row gy-5 justify-content-between">
//           {/* COMPANY INFO */}
//           <div className="col-12 col-lg-4">
//             <div className="d-flex align-items-center mb-3">
//               <img src={AuxznLogo} alt="Auxzn Logo" className="footer-logo" />
//             </div>

//             <p className="footer-description ">
//               Auxzn Machinery delivers innovative industrial automation and
//               material handling solutions worldwide with reliability, quality,
//               and trust.
//             </p>
//           </div>

//           {/* QUICK LINKS */}
//           <div className="col-6 col-lg-2 ">
//             <h5 className="footer-title auxznColor">Quick Links</h5>

//             <ul className="footer-links ">
//               <li>Home</li>
//               <li>About Us</li>
//               <li>Products</li>
//               <li>Blogs</li>
//               <li>Contact</li>
//             </ul>
//           </div>

//           {/* CONTACT */}
//           <div className="col-6 col-lg-3">
//             <h5 className="footer-title auxznColor">Contact</h5>

//             <ul className="footer-contact">
//               <li>No. 24, Industrial Avenue, Chennai, Tamil Nadu, India</li>

//               <li>+91 98765 43210</li>

//               <li>support@auxzn.com</li>
//             </ul>
//           </div>

//           {/* SOCIAL */}
//           <div className="col-12 col-lg-2">
//             <h5 className="footer-title auxznColor">Follow Us</h5>

//             <div className="footer-socials">
//               <a href="/">
//                 <FontAwesomeIcon icon={faFacebookF} />
//               </a>

//               <a href="/">
//                 <FontAwesomeIcon icon={faInstagram} />
//               </a>

//               <a href="/">
//                 <FontAwesomeIcon icon={faLinkedinIn} />
//               </a>

//               <a href="/">
//                 <FontAwesomeIcon icon={faWhatsapp} />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* COPYRIGHT */}
//         <div className="footer-bottom text-center auxznColor">
//           © 2026 Auxzn Machinery. All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }

import React from "react";

import AuxznLogo from "../Assets/Images/Auxznlogo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { NavLink } from "react-router-dom";

import "../App.css";

export default function Footer() {
  return (
    <footer className="footer-section mt-5">
      <div className="container">
        <div className="row gy-5 justify-content-between">
          {/* COMPANY INFO */}
          <div className="col-12 md-4  col-lg-4 ">
            <div className="d-flex align-items-center mb-3 ">
              <NavLink to="/">
                <img src={AuxznLogo} alt="Auxzn Logo" className="footer-logo " />
              </NavLink>
            </div>

            <p className="footer-description text-start">
              Auxzn Machinery delivers innovative industrial automation and
              material handling solutions worldwide with reliability, quality,
              and trust.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-12 col-md-6 col-lg-2">
            <h5 className="footer-title auxznColor">Quick Links</h5>

            <ul className="footer-links">
              <li>
                <NavLink to="/" className="footer-link-router">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/products" className="footer-link-router">
                  Products
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className="footer-link-router">
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink to="/blogs" className="footer-link-router">
                  Blogs
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className="footer-link-router">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="footer-title auxznColor">Contact</h5>

            <ul className="footer-contact">
              <li>No. 24, Industrial Avenue, Chennai, Tamil Nadu, India</li>

              <li>+91 98765 43210</li>

              <li>support@auxzn.com</li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="col-12 col-lg-2">
            <h5 className="footer-title auxznColor">Follow Us</h5>

            <div className="footer-socials">
              <a href="/">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              <a href="/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a href="/">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>

              <a href="/">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom text-center auxznColor">
          © 2026 Auxzn Machinery. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
