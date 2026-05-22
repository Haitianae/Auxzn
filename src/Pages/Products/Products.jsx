import React from "react";
import FadeUp from "../../Components/FadeUp";
import Banner from "../../Assets/Images/Auxzn banner.jpg";
import Drying from "../../Assets/Images/Products images/Drying and dehumidifying.jpg";
import Feeding from "../../Assets/Images/Products images/Feeding and conveying.jpg";
import Dosing from "../../Assets/Images/Products images/Dosing and mixing.jpg";
import Heating from "../../Assets/Images/Products images/Heating and cooling.jpg";
import Granulating from "../../Assets/Images/Products images/Granulating and recycling.jpg";
import Automation from "../../Assets/Images/Products images/Automation system.jpg";
import Hot from "../../Assets/Images/Products images/Hot runner system.jpg";
import Central from "../../Assets/Images/Products images/Central conveying and accessories.jpg";
import Parts from "../../Assets/Images/Products images/Parts.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faGear,
  faMicrochip,
  faIndustry,
  faGlobe,
  faHeadset,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../Components/Footer";
import ContactComponent from "../../Components/ContactComponent";
import { Link } from "react-router-dom";

const products = [
  {
    img: Drying,
    title: "Drying and dehumidifying",
    path: "/products/drying-and-dehumidifying",
  },

  {
    img: Feeding,
    title: "Feeding and conveying",
  },

  {
    img: Dosing,
    title: "Dosing and mixing",
  },

  {
    img: Heating,
    title: "Heating and cooling",
  },

  {
    img: Granulating,
    title: "Granulating and recycling",
  },

  {
    img: Automation,
    title: "Automation system",
  },

  {
    img: Hot,
    title: "Hot runner system",
  },

  {
    img: Central,
    title: "Central conveying and accessories",
  },

  {
    img: Parts,
    title: "Parts",
  },
];

export default function Products() {
  return (
    <div className="container-fluid m-0 p-0">
      <img
        src={Banner}
        className="img-fluid w-100 rounded-bottom-5"
        alt="auxzn banner"
      />

      {/* PRODUCTS SECTION */}
      <section className="products-page-section py-5">
        <div className="products-floating-gear">
          <FontAwesomeIcon icon={faGear} />
        </div>
        <div className="container">
          {/* SECTION HEADER */}
          <FadeUp className="w-100">
            <div className="text-center mb-5">
              <div className="products-gear products-gear-1">
                <FontAwesomeIcon icon={faGear} />
              </div>

              <div className="products-gear products-gear-2">
                <FontAwesomeIcon icon={faGear} />
              </div>
              <span className="products-badge">OUR PRODUCTS</span>

              <h2 className="products-page-heading mt-3">
                Industrial Solutions for Modern Manufacturing
              </h2>

              <p className="products-page-description mx-auto">
                Explore our complete range of advanced industrial machinery and
                automation systems designed for efficiency, precision, and
                reliability.
              </p>
            </div>
          </FadeUp>

          {/* PRODUCT CARDS */}
          <div className="row g-4 justify-content-center">
            {" "}
            {products.map((product, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-4">
                <FadeUp delay={index * 0.08} className="h-100">
                  <div className="product-page-card h-100">
                    {/* IMAGE */}
                    <div className="product-page-image-wrapper">
                      <img
                        src={product.img}
                        alt={product.title}
                        className="product-page-image"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="product-page-content">
                      <h3>{product.title}</h3>
                      <p>
                        Advanced industrial systems designed for high efficiency
                        and reliable manufacturing performance.
                      </p>
                      <Link to={product.path} className="product-page-btn">
                        {" "}
                        Learn More
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="product-btn-icon"
                        />
                      </Link>{" "}
                    </div>
                  </div>
                </FadeUp>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* WHY AUXZN SECTION */}

      <FadeUp className="w-100">
        <section className="why-auxzn-section py-5 ">
          <div className="container-fluid px-lg-5 px-3">
            {/* SECTION HEADER */}

            <div className="text-center mb-5">
              <span className="products-badge">WHY AUXZN</span>

              <h2 className="products-page-heading mt-3">
                Manufacturing Excellence, Delivered!{" "}
              </h2>

              <p className="products-page-description mx-auto">
                Auxzn Machinery delivers advanced automation and industrial
                systems designed for performance, precision, and long-term
                operational reliability.
              </p>
            </div>

            {/* CONTENT */}

            <div className="row g-4 align-items-stretch ">
              {/* LEFT CARD */}

              <div className="col-lg-6">
                <div className="why-auxzn-main-card h-100">
                  {/* TOP LINE */}
                  <div className="why-auxzn-top-line"></div>

                  {/* ICON */}
                  <div className="why-auxzn-icon">
                    <FontAwesomeIcon icon={faGears} />
                  </div>

                  {/* CONTENT */}

                  <h3>Smart Industrial Engineering</h3>

                  <p>
                    We provide intelligent machinery solutions that improve
                    production efficiency, automation accuracy, and industrial
                    workflow performance.
                  </p>

                  {/* LINE */}
                  <div className="why-auxzn-line"></div>

                  {/* STATS */}
                  <div className="why-auxzn-stats">
                    <div>
                      <h4>15+</h4>
                      <span>Product Categories</span>
                    </div>

                    <div>
                      <h4>24/7</h4>
                      <span>Technical Support</span>
                    </div>
                  </div>

                  {/* GLOW */}
                  <div className="why-auxzn-glow"></div>
                </div>
              </div>

              {/* RIGHT SIDE */}

              <div className="col-lg-6">
                <div className="row g-4 h-100">
                  {/* CARD 1 */}

                  <div className="col-12">
                    <div className="why-auxzn-small-card h-100 why-auxzn-small-card-backgroundImage">
                      <div className="why-auxzn-small-icon">
                        <FontAwesomeIcon icon={faGear} spin />
                      </div>

                      <h4>Reliable Performance</h4>

                      <p>
                        Durable machinery systems built for consistent
                        industrial operations.
                      </p>
                    </div>
                  </div>

                  {/* CARD 2 */}

                  <div className="col-12">
                    <div className="why-auxzn-small-card h-100 why-auxzn-small-card-backgroundImage">
                      <div className="why-auxzn-small-icon">
                        <FontAwesomeIcon icon={faMicrochip} spin />
                      </div>

                      <h4>Advanced Automation</h4>

                      <p>
                        Precision-engineered automation systems designed for
                        modern industries.
                      </p>
                    </div>
                  </div>

                  {/* CARD 3 */}

                  <div className="col-12">
                    <div className="why-auxzn-small-card h-100 why-auxzn-small-card-backgroundImage">
                      <div className="why-auxzn-small-icon">
                        <FontAwesomeIcon icon={faGlobe} beat />
                      </div>

                      <h4>Global Manufacturing Standards</h4>

                      <p>
                        Solutions aligned with international industrial and
                        production requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeUp>
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
