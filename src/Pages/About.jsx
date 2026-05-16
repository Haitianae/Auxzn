import React from "react";
import Footer from "../Components/Footer";
import FadeUp from "../Components/FadeUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faEye,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";
import Banner from "../Assets/Images/Auxzn banner.jpg";

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

    <div className="container mt-5 about-section">

  {/* HEADER */}
  <div className="text-center mb-5">
    <h1 className="auxznColor fw-bold">About Auxzn</h1>
    <p className="textColor mt-3 about-subtext">
      Driving industrial innovation with precision, reliability, and smart automation solutions.
    </p>
  </div>

  {/* MAIN LAYOUT */}
  <div className="row align-items-center g-5">

    {/* LEFT CONTENT */}
    <div className="col-lg-6">
      <div className="about-left">
        <h2 className="auxznColor fw-bold mb-3">
          Engineering Excellence for Modern Manufacturing
        </h2>

        <p className="textColor">
          Auxzn Machinery specializes in delivering high-performance industrial automation
          and material handling solutions tailored for modern manufacturing environments.
        </p>

        <p className="textColor">
          With a strong focus on innovation and sustainability, we empower industries
          to achieve efficiency, consistency, and long-term growth.
        </p>
      </div>
    </div>

    {/* RIGHT CARDS */}
    <div className="col-lg-6">
      <div className="row g-4">

        {/* BUSINESS IDEA */}
        <div className="col-12">
          <div className="about-feature-card">
            <div className="about-icon">
              <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <div>
              <h3 className="auxznColor">Business Idea</h3>
              <p className="textColor mb-0">
                Focused innovation with sustainable industrial growth strategies.
              </p>
            </div>
          </div>
        </div>

        {/* VISION */}
        <div className="col-12">
          <div className="about-feature-card">
            <div className="about-icon">
              <FontAwesomeIcon icon={faEye} />
            </div>
            <div>
              <h3 className="auxznColor">Our Vision</h3>
              <p className="textColor mb-0">
                To become the world’s leading one-stop auxiliary equipment provider.
              </p>
            </div>
          </div>
        </div>

        {/* MISSION */}
        <div className="col-12">
          <div className="about-feature-card">
            <div className="about-icon">
              <FontAwesomeIcon icon={faBullseye} />
            </div>
            <div>
              <h3 className="auxznColor">Our Mission</h3>
              <p className="textColor mb-0">
                Deliver reliable, high-performance solutions with strong global support.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</div>

      {/* Footer */}
      <FadeUp className="w-100">
        <Footer />
      </FadeUp>
    </div>
  );
}
