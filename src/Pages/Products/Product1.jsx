import React from "react";
import FadeUp from "../../Components/FadeUp";
import Banner from "../../Assets/Images/Auxzn banner.jpg";
import Drying from "../../Assets/Images/Products images/Drying and dehumidifying.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../Components/Footer";
import ContactComponent from "../../Components/ContactComponent";
import "../../App.css";

export default function Product1() {
  return (
    <div className="container-fluid m-0 p-0 background-contaniner">
      {/* BANNER */}
      <img
        src={Banner}
        className="img-fluid w-100 rounded-bottom-5"
        alt="banner"
      />

      <div className="container mt-5">
        <FadeUp width={100}>
          {/* HERO */}
          <div className="industrial-product-card">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="industrial-badge">HOPPER DRYER</span>

                <h1 className="industrial-title">
                  Standard Hopper Dryer SHD-E
                </h1>

                <p className="industrial-description">
                  SHD-E hopper dryers are used for drying hygroscopic plastics,
                  such as PS, PP, and ABS etc., which can reach the highest
                  drying temperature up to 160℃. In addition, multiple
                  accessories are optional to realize different functions, such
                  as recycling hot air and filtering metal impurities in the
                  materials. With the floor stand, it makes floor mount of the
                  machine available.
                </p>

                {/* SPECS */}
                <div className="industrial-specs">
                  <div className="industrial-spec-card">
                    <h3>160°C</h3>
                    <span>Drying Temperature</span>
                  </div>

                  <div className="industrial-spec-card">
                    <h3>24/7</h3>
                    <span>Industrial Operation</span>
                  </div>
                </div>
              </div>

              {/* IMAGE */}
              <div className="col-lg-6">
                <img
                  src={Drying}
                  alt="machine"
                  className="img-fluid industrial-product-image"
                />
              </div>
            </div>
          </div>
        </FadeUp>
      </div>

      <div className="container-fluid m-0 p-0">
        <FadeUp width={100}>
          {/* FEATURES */}
          <div className="industrial-features-section">
            <div className="text-center mb-5">
              <span className="industrial-badge">FEATURES</span>

              <h2 className="industrial-section-title mt-3">
                Advanced Drying Technology
              </h2>
            </div>

            <div className="row g-4">
              {[
                "Adopt hot air diffuser to keep plastics dry and temperature stable, thus improve drying efficiency.",
                "All models are equipped with external power switch.",
                "Automatic heater power cutoff with alarm system.",
                "All models standard equipped with 7-day timer and intermittent operation.",
                "The series of blowers are equipped with overheat protector.",
                "All material contact surfaces are made of stainless steel.",
                "Temperature protector prevents heater pipe damage.",
                "Adopt heat-insulated blower to prolong blower lifespan.",
              ].map((item, index) => (
                <div className="col-md-6 col-lg-4 d-flex" key={index}>
                  <div className="feature-box">
                    <div className="feature-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <p>{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
      <div className="container">
        <FadeUp width={100}>
          {/* APPLICATIONS */}
          <div className="industrial-application-panel">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <span className="industrial-dark-badge">APPLICATIONS</span>

                <h2 className="industrial-application-title">
                  Built For Plastic Processing Industries
                </h2>

                <p className="industrial-application-text">
                  SHD-E hopper dryers are used for drying hygroscopic plastics,
                  such as PS, PP, and ABS etc., which can reach the highest
                  drying temperature up to 160°C. In addition, multiple
                  accessories are optional to realize different functions, such
                  as recycling hot air and filtering metal impurities in the
                  materials.
                </p>
              </div>

              <div className="col-lg-5">
                <div className="industrial-side-card">
                  <h4>Industry Applications</h4>
                  <ul className="mt-3">
                    <li>Plastic Injection Molding</li>
                    <li>ABS Material Drying</li>
                    <li>Industrial Manufacturing</li>
                    <li>Automated Production</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>

      {/* CONTACT */}
      <FadeUp className="w-100 mt-5">
        <ContactComponent />
      </FadeUp>

      {/* FOOTER */}
      <FadeUp className="w-100 mt-5">
        <Footer />
      </FadeUp>
    </div>
  );
}
