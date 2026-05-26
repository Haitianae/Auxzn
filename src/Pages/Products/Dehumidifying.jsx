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
          <FadeUp className="w-100">
            <div className="text-center mb-5">
        

              <span className="dehumidifying-badge mt-5">DRYING AND DEHUMIDIFYING</span>

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
          <div className="row g-4 justify-content-center">
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
  <section className="dh-section py-5">
    <div className="container">

      {/* HEADER */}
      <div className="dh-header text-center mb-5">
        <h2 className="dh-title">
          Drying & Dehumidifying Systems
        </h2>

        <p className="dh-subtitle">
          Reliable moisture control solutions designed to improve material quality,
          eliminate defects, and ensure consistent production performance.
        </p>
      </div>

      <div className="row align-items-center">

        {/* LEFT CONTENT */}
        <div className="col-lg-6">
          <div className="dh-content">

            <h3>
              Built for Precision Material Processing
            </h3>

            <p>
              Moisture in raw materials leads to defects like bubbles,
              cracks, and poor surface finish. Our dehumidifying systems
              ensure controlled drying conditions for stable and
              high-quality output.
            </p>

            <div className="dh-features">

              <div className="dh-feature">
                <FontAwesomeIcon icon={faGear} />
                <span>Stable low dew point drying</span>
              </div>

              <div className="dh-feature">
                <FontAwesomeIcon icon={faMicrochip} />
                <span>Automated temperature control</span>
              </div>

              <div className="dh-feature">
                <FontAwesomeIcon icon={faGlobe} />
                <span>Energy-efficient operation</span>
              </div>

            </div>

          </div>
        </div>

        {/* RIGHT STATS */}
        <div className="col-lg-6">
          <div className="dh-stats-box">

            <div className="dh-stat">
              <h4>-40°C</h4>
              <p>Dew Point</p>
            </div>

            <div className="dh-stat">
              <h4>30%</h4>
              <p>Energy Saving</p>
            </div>

            <div className="dh-stat">
              <h4>24/7</h4>
              <p>Continuous Operation</p>
            </div>

            <div className="dh-stat">
              <h4>High</h4>
              <p>Material Consistency</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</FadeUp>

      <FadeUp className="w-100">
        <ContactComponent />
      </FadeUp>

      <FadeUp className="w-100 mt-5">
        <Footer />
      </FadeUp>
    </div>
  );
}
