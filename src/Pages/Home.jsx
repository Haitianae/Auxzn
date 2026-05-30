import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import Footer from "../Components/Footer";
import FadeUp from "../Components/FadeUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faHandHoldingHeart,
  faHandshake,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import "../App.css";
import { NavLink } from "react-router-dom";
import Banner from "../Assets/Images/Auxzn banner.jpg";
import Drying from "../Assets/Images/Drying and dehumidifying.jpg";
import Heating from "../Assets/Images/Heating and cooling.jpg";
import Dosing from "../Assets/Images/Dosing and mixing.jpg";
import Feeding from "../Assets/Images/Feeding and conveying.jpg";
import ContactComponent from "../Components/ContactComponent";

const products = [
  { img: Drying, title: "Drying and dehumidifying" },
  { img: Feeding, title: "Feeding and conveying" },
  { img: Dosing, title: "Dosing and mixing" },
  { img: Heating, title: "Heating and cooling" },
];

const brandValues = [
  {
    icon: <FontAwesomeIcon icon={faUsers} size="2x" />,
    title: "User-oriented",
    desc: "On customer service, auxzn adopts considerable and flexible ways to meet all kinds of requirements.",
  },
  {
    icon: <FontAwesomeIcon icon={faHandHoldingHeart} size="2x" />,
    title: "Humanization",
    desc: "On product design, auxzn adheres to user-friendly principle by improving new technologies to realize design humanization to the maximum.",
  },
  {
    icon: <FontAwesomeIcon icon={faHandshake} size="2x" />,
    title: "One-stop",
    desc: "On business cooperation, auxzn provides one-stop experience, and creates trustful and friendly long-term cooperation.",
  },
];

export default function Home() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="container-fluid m-0 p-0">
      {/* Banner */}
      <img
        src={Banner}
        className="img-fluid w-100 rounded-bottom-5"
        alt="auxzn banner"
      />

      {/* Products Section */}
      <div className="container my-5">
        <div className="row mb-4">
      <div className="text-center ">
                            <span className="products-badge">OUR PRODUCTS</span>

            <h2 className="text-center auxznColor fw-bold mt-3">
              Explore Our Industrial Solutions
            </h2>

            <p className="text-center textColor">
            Explore a complete range of high-performance industrial solutions designed to optimize productivity, enhance precision, and power the future of smart manufacturing.
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {products.map((p) => (
            <div key={p.title} className="col-12 col-sm-6 col-lg-3 d-flex">
              <FadeUp className="w-100">
                <div className="card product-card w-100 h-100 shadow-sm border-0">
                  <div className="ratio ratio-4x3">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="card-img-top object-fit-cover "
                    />
                  </div>

                  <div className="card-body text-center product-cardBodyBorder d-flex flex-column justify-content-center">
                    <h3 className="h5 fw-bold mb-3">{p.title}</h3>

                    <NavLink
                      to="/products"
                      className="learn-more-btn text-decoration-none mx-auto"
                    >
                      Learn More{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="learn-more-icon"
                      />
                    </NavLink>
                  </div>
                </div>
              </FadeUp>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Values + Counter Section */}
      <section className="brand-value-section py-5">
        <div className="container">
          {/* Heading */}
          <FadeUp className="w-100">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <span className="products-badge">WHY AUXZN</span>

                <h2 className="auxznColor mt-3 fw-bold">Why Choose Us ?</h2>

                <p className="textColor">
                  What drives us forward and shapes every partnership
                </p>
              </div>
            </div>
          </FadeUp>
          {/* Brand Cards */}
          <div className="row g-4 justify-content-center">
            {brandValues.map((value) => (
              <div key={value.title} className="col-12 col-md-6 col-lg-4">
                <div className="card brand-value-card h-100 border-0">
                  <div className="card-body text-center p-4">
                    <div className="icon-wrapper mx-auto mb-4 d-flex align-items-center justify-content-center auxznColor">
                      {value.icon}
                    </div>

                    <h3 className="h4 fw-bold mb-3">{value.title}</h3>

                    <p className="mb-0 textColor">{value.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Counter Heading */}
          <FadeUp className="w-100">
            <div className="row mt-5 mb-4">
              <div className="col-12 text-center">
                <span className="products-badge">OUR GLOBAL PRESENCE</span>

                <h2 className="fw-bold auxznColor mt-3">Global Presence</h2>

                <p className="textColor">
                  Building trusted partnerships and delivering industrial
                  excellence worldwide.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Counter Cards */}
          <ScrollTrigger onEnter={() => setCounterOn(true)}>
            <div className="row g-4 justify-content-center">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="counter-card text-center">
                  <h2 className="counter-number">
                    {counterOn && <CountUp start={0} end={50} duration={2} />}
                    <span>+</span>
                  </h2>

                  <p className="counter-text">Years of Experience</p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="counter-card text-center">
                  <h2 className="counter-number">
                    {counterOn && <CountUp start={0} end={150} duration={2} />}
                    <span>+</span>
                  </h2>

                  <p className="counter-text">Collaborators</p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="counter-card text-center">
                  <h2 className="counter-number">
                    {counterOn && <CountUp start={0} end={13} duration={2} />}
                  </h2>

                  <p className="counter-text">Offices Worldwide</p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="counter-card text-center">
                  <h2 className="counter-number">
                    {counterOn && <CountUp start={0} end={300} duration={2} />}
                    <span>+</span>
                  </h2>

                  <p className="counter-text">Service & Sales Companies</p>
                </div>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <FadeUp className="w-100">
        <ContactComponent />
      </FadeUp>

      {/* Footer */}
      <FadeUp className="w-100 mt-5">
        <Footer />
      </FadeUp>
    </div>
  );
}
