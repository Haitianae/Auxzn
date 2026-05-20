import React from "react";

import { useNavigate } from "react-router-dom";

import {
  faArrowRight,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Footer from "../../Components/Footer";

import FadeUp from "../../Components/FadeUp";

import blogsData from "./blogsData";

import Banner from "../../Assets/Images/Auxzn banner.jpg";

import ContactComponent from "../../Components/ContactComponent";

export default function Blogs() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid m-0 p-0 blogs-wrapper">
      {/* BANNER */}

      <img
        src={Banner}
        className="img-fluid w-100 rounded-bottom-5"
        alt="auxzn banner"
      />

      {/* BLOG SECTION */}

      <section className="blogs-section py-5 position-relative overflow-hidden">
        {/* GEARS */}

        <FontAwesomeIcon
          icon={faGear}
          className="blogs-main-gear"
        />

        <FontAwesomeIcon
          icon={faGear}
          className="blogs-small-gear"
        />

        <FontAwesomeIcon
          icon={faGear}
          className="blogs-bottom-gear"
        />

        <div className="container position-relative">
          {/* TOP */}

          <div className="text-center mb-5">
            <span className="blogs-badge">
              OUR BLOGS
            </span>

            <h1 className="blogs-heading mt-3">
              Latest Insights & Articles
            </h1>

            <p className="blogs-description mx-auto">
              Explore the latest industrial insights,
              technologies, and innovations from AUXZN.
            </p>
          </div>

          {/* CARDS */}

<div
  className={`row g-4 ${
    blogsData.length === 1
      ? "justify-content-center"
      : ""
  }`}
>            {blogsData.map((blog) => (
              <div
                className="col-12 col-md-6 col-lg-4"
                key={blog.id}
              >
                <div
                  className="blog-card"
                  onClick={() => navigate(blog.path)}
                >
                  {/* IMAGE */}

                  <div className="blog-card-image-wrapper">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="blog-card-image"
                    />
                  </div>

                  {/* CONTENT */}

                  <div className="blog-card-content">
                    <h3>{blog.title}</h3>

                    <p>{blog.description}</p>

                    <button className="blog-card-btn">
                      Read More

                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="blog-card-btn-icon"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <FadeUp className="w-100">
        <ContactComponent />
      </FadeUp>

      {/* FOOTER */}

      <FadeUp className="w-100 mt-5">
        <Footer />
      </FadeUp>
    </div>
  );
}