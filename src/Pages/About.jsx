import React from "react";
import Footer from "../Components/Footer";
import FadeUp from "../Components/FadeUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faEye,
  faBullseye,
  faArrowRight,
  faUsers,
  faShieldAlt,
  faSmile,
  faCheckCircle,
  faHandshake,
  faBalanceScale,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import Banner from "../Assets/Images/Auxzn banner.jpg";
import logo from "../Assets/Images/Auxznlogo.png";

import "../App.css";

export default function About() {
  return (
    <div className="container-fluid m-0 p-0">
      {/* Banner */}
      <img
        src={Banner}
        className="img-fluid w-100 rounded-bottom-5"
        alt="auxzn banner"
      />
      <FadeUp className="w-100">
        <div className="container-fluid mt-5 about-section p-5 rounded-5">
          {/* HEADER */}
          <div className="text-center mb-5">
            <h1 className="auxznColor fw-bold">
              About{" "}
              <span>
                <img
                  src={logo}
                  className="about-Auxznlogo m-0"
                  alt="Auxzn logo"
                />
              </span>
            </h1>
            <p className="textColor mt-3 about-subtext">
              Driving industrial innovation with precision, reliability, and
              smart automation solutions.
            </p>
          </div>

          <div className="row g-5 align-items-stretch">
            {/* LEFT MAIN CARD */}
            <div className="col-lg-6">
              <div className="about-main-card">
                <span className="about-tag">Who We Are</span>

                <h2>
                  Engineering Excellence <br />
                  for Modern Manufacturing
                </h2>

                <p>
                  Auxzn Machinery delivers{" "}
                  <strong>high-performance automation</strong>
                  and <strong>material handling systems</strong> designed for
                  modern industries.
                </p>

                <p>
                  We empower businesses with{" "}
                  <span>efficiency, precision, and scalable growth</span>.
                </p>

                <button className="about-main-btn">
                  Explore Solutions
                  <FontAwesomeIcon icon={faArrowRight} className="btn-icon" />
                </button>
              </div>
            </div>

            {/* RIGHT CARDS */}
            <div className="col-lg-6">
              <div className="row g-4">
                {/* BUSINESS IDEA */}
                <div className="col-12">
                  <div className="about-modern-card">
                    <div className="about-card-icon">
                      <FontAwesomeIcon icon={faLightbulb} />
                    </div>
                    <div>
                      <h4>Business Idea</h4>
                      <p>
                        Focused innovation with sustainable industrial growth
                        strategies.
                      </p>
                    </div>
                  </div>
                </div>

                {/* VISION */}
                <div className="col-12">
                  <div className="about-modern-card">
                    <div className="about-card-icon">
                      <FontAwesomeIcon icon={faEye} />
                    </div>
                    <div>
                      <h4>Our Vision</h4>
                      <p>
                        To become the world’s leading one-stop auxiliary
                        equipment provider.
                      </p>
                    </div>
                  </div>
                </div>

                {/* MISSION */}
                <div className="col-12">
                  <div className="about-modern-card">
                    <div className="about-card-icon">
                      <FontAwesomeIcon icon={faBullseye} />
                    </div>
                    <div>
                      <h4>Our Mission</h4>
                      <p>
                        Deliver reliable, high-performance solutions with strong
                        global support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>

      <FadeUp className="w-100">
        <div className="container mt-5 value-section">
          {/* HEADER */}
          <div className="text-center mb-5">
            <h1 className="auxznColor fw-bold">About Our Values</h1>
            <p className="textColor">
              The principles that drive our performance and growth
            </p>
          </div>

          <div className="row g-4">
            {/* ITEM */}
            {[
              {
                title: "Talents",
                icon: faUsers,
                text: "People oriented, talents first; always seek talents with eagerness.",
              },
              {
                title: "Responsibility",
                icon: faShieldAlt,
                text: "Responsibility is more important than ability, get everything done with commitment.",
              },
              {
                title: "Satisfaction",
                icon: faSmile,
                text: "We strive to satisfy employees, customers, and stakeholders.",
              },
              {
                title: "Innovation",
                icon: faLightbulb,
                text: "Innovation drives sustainable development and global competitiveness.",
              },
              {
                title: "Quality",
                icon: faCheckCircle,
                text: "Quality is the responsibility of every individual in the organization.",
              },
              {
                title: "Teamwork",
                icon: faHandshake,
                text: "Mutual respect, trust, and collaboration drive our success.",
              },
              {
                title: "Integrity",
                icon: faBalanceScale,
                text: "We serve with honesty and act as responsible corporate citizens.",
              },
              {
                title: "Execution",
                icon: faBolt,
                text: "We act decisively, improve continuously, and deliver results.",
              },
            ].map((item, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="value-card">
                  <div className="value-icon">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>

                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>

      <FadeUp className="w-100">
        <section className="contact-section py-5">
          <div className="container">
            <div className="contact-banner row align-items-center g-0 overflow-hidden">
              {/* LEFT CONTENT */}
              <div className="col-lg-7">
                <div className="contact-content">
                  <h2 className="contact-heading">Feel free to reach us!</h2>

                  <p className="contact-description">
                    Whether you need support, product information, or customized
                    industrial solutions, our team is ready to help you with
                    reliable guidance and quick assistance.
                  </p>

                  <div className="d-flex flex-wrap gap-3 mt-4">
                    <button className="contact-btn">Contact Us</button>

                    <button className="contact-outline-btn">
                      Explore Products
                    </button>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE DESIGN */}
              <div className="col-lg-5">
                <div className="contact-visual">
                  <div className="contact-box contact-box-1"></div>
                  <div className="contact-box contact-box-2"></div>
                  <div className="contact-box contact-box-3"></div>

                  <div className="contact-circle"></div>

                  <div className="contact-card-floating">
                    <h4>24/7 Support</h4>
                    <p>Reliable industrial assistance worldwide.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{" "}
      </FadeUp>

      {/* Footer */}
      <FadeUp className="w-100">
        <Footer />
      </FadeUp>
    </div>
  );
}
