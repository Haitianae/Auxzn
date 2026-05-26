import React from "react";
import FadeUp from "../../Components/FadeUp";
import Banner from "../../Assets/Images/Auxzn banner.jpg";
import Drying from "../../Assets/Images/Products images/Drying and dehumidifying.jpg";
import CabinetDryers from "../../Assets/Images/Dehumidifying/Cabinet Dryers.jpg";
import CompressedAirDryers from "../../Assets/Images/Dehumidifying/Compressed Air Dryers.jpg";
import DryingLoader from "../../Assets/Images/Dehumidifying/Drying Loaders.jpg";
import EngeryEfficient from "../../Assets/Images/Dehumidifying/Energy-efficient.jpg";
import EnerySaving from "../../Assets/Images/Dehumidifying/Energy-saving.jpg";
import HoneyCombDehumidifiers from "../../Assets/Images/Dehumidifying/HoneyComb_Dehumidifiers.jpg";
import Hopper from "../../Assets/Images/Dehumidifying/Hopper Dryers.jpg";
import StandardDrying from "../../Assets/Images/Dehumidifying/Standard Drying.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowRight,
  faGear,
  faMicrochip,
  faGlobe,
  faGears,
  faWind,
  faTemperatureLow,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

import Footer from "../../Components/Footer";
import ContactComponent from "../../Components/ContactComponent";
import { Link } from "react-router-dom";

import "../../App.css";

const products = [
  {
    img: Drying,
    title: "Drying and dehumidifying",
    path: "/products/product1",
    desc: "Comprehensive drying and dehumidifying systems designed to maintain material integrity and ensure consistent production quality.",
  },
  {
    img: CabinetDryers,
    title: "CabinetDryers",
    path: "/products/product2",
    desc: "Efficient cabinet dryers ideal for uniform drying of engineering plastics with precise temperature control.",
  },
  {
    img: CompressedAirDryers,
    title: "Compressed Air Dryers",
    path: "/products/product3",
    desc: "High-performance dryers that use compressed air technology to remove moisture quickly and effectively.",
  },
  {
    img: DryingLoader,
    title: "Drying Loaders",
    path: "/products/product4",
    desc: "Integrated drying and loading systems that streamline material handling and improve productivity.",
  },
  {
    img: EngeryEfficient,
    title: "Energy-efficient",
    path: "/products/product5",
    desc: "Advanced solutions engineered to reduce energy consumption while maintaining superior drying performance.",
  },
  {
    img: EnerySaving,
    title: "Energy-saving",
    path: "/products/product6",
    desc: "Cost-effective drying systems designed to optimize power usage and lower operational expenses.",
  },
  {
    img: HoneyCombDehumidifiers,
    title: "HoneyComb_Dehumidifiers",
    path: "/products/product7",
    desc: "High-precision honeycomb rotor technology for consistent low dew point and superior moisture removal.",
  },
  {
    img: Hopper,
    title: "Hopper Dryers",
    path: "/products/product8",
    desc: "Reliable hopper dryers for efficient pre-processing of plastic materials with uniform heat distribution.",
  },
  {
    img: StandardDrying,
    title: "Standard Drying",
    path: "/products/product9",
    desc: "Robust and dependable drying systems suitable for a wide range of industrial material drying needs.",
  },
];

export default function Dehumidifying() {
  return (
    <div className="dehumidifying-wrapper">
      <img
        src={Banner}
        className="img-fluid w-100 dehumidifying-banner"
        alt="auxzn banner"
      />

      {/* PRODUCTS SECTION */}
      <section className="dehumidifying-products-section mt-5">
        <div className="container">
          {/* HEADER */}
          <FadeUp className="w-100 ">
            <div className="text-center mb-5">
              <span className="dehumidifying-bluebadge mt-5">
                DRYING AND DEHUMIDIFYING
              </span>

              <h1 className="auxznColor fw-bold mt-3">
                Drying and Dehumidifying Solutions
              </h1>

              <p className="dehumidifying-description mx-auto">
                Discover our advanced range of drying and dehumidifying systems
                engineered to ensure optimal moisture control, material quality,
                and energy-efficient performance across industrial applications.
              </p>
            </div>
          </FadeUp>

          {/* CARDS */}
          <div className="row g-4 justify-content-center pb-5 mb-3">
            {products.map((product, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-4">
                <FadeUp delay={index * 0.08} className="h-100">
                  <div className="dehumidifying-card h-100">
                    <div className="dehumidifying-image-wrapper">
                      <img
                        src={product.img}
                        alt={product.title}
                        className="dehumidifying-image"
                      />
                    </div>

                    <div className="dehumidifying-content">
                      <h3>{product.title}</h3>

                      <p>{product.desc}</p>

                      <Link to={product.path} className="dehumidifying-btn">
                        Learn More
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="dehumidifying-btn-icon"
                        />
                      </Link>
                    </div>
                  </div>
                </FadeUp>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AUXZN */}
      <FadeUp className="w-100">
        <div className=" container-fluid dhx-section  pb-5">
          {/* ABSTRACT BACKGROUNDS */}
          <div className="dhx-bg-circle"></div>
          <div className="dhx-bg-grid"></div>

          <div className="container mt-5">
            {/* HEADER */}
            <div className="text-center dhx-header">
              <span className="dhx-badge">INDUSTRIAL DRYING SOLUTIONS</span>

              <h1 className="dhx-title mt-3">Drying & Dehumidifying Systems</h1>

              <p className="dhx-subtitle">
                Precision-engineered moisture control systems designed to
                deliver consistent quality, reduce defects, and optimize energy
                usage.
              </p>
            </div>

            <div className="row align-items-center">
              {/* LEFT SIDE */}
         

              {/* RIGHT SIDE */}
              <div className="col-lg-6 mt-5">
                <div className="dhx-card">
                  <div className="dhx-main">
                    <h2>Moisture Control</h2>
                    <p>Precision Dehumidification Systems</p>
                  </div>

                  <div className="dhx-grid">
                    <div className="dhx-box">
                      <h4>Low Humidity</h4>
                      <span>Prevents material defects</span>
                    </div>

                    <div className="dhx-box">
                      <h4>Uniform Drying</h4>
                      <span>Consistent material quality</span>
                    </div>

                    <div className="dhx-box">
                      <h4>Energy Efficient</h4>
                      <span>Reduced power consumption</span>
                    </div>

                    <div className="dhx-box">
                      <h4>Smart Control</h4>
                      <span>Automated process control</span>
                    </div>
                  </div>
                </div>
              </div>
                   <div className="col-lg-6 mt-5 mb-lg-0">
                <div className="dhx-left">
                  <h2>Engineered for High-Performance Material Processing</h2>

                  <p>
                    Moisture contamination can compromise product strength and
                    appearance. Our systems ensure stable drying environments
                    with intelligent controls and energy-efficient performance.
                  </p>

                  <div className="dhx-features">
                    <div className="dhx-feature">
                      <FontAwesomeIcon icon={faWind} />
                      <span>Effective moisture removal system</span>
                    </div>

                    <div className="dhx-feature">
                      <FontAwesomeIcon icon={faTemperatureLow} />
                      <span>Controlled drying temperature</span>
                    </div>

                    <div className="dhx-feature">
                      <FontAwesomeIcon icon={faBolt} />
                      <span>Energy-efficient operation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>

      <FadeUp className="w-100 ">
        <ContactComponent />
      </FadeUp>

      <FadeUp className="w-100 mt-5">
        <Footer />
      </FadeUp>
    </div>
  );
}
