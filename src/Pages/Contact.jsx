import React from "react";
import "../App.css";
import Banner from "../Assets/Images/Auxzn banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";
import FadeUp from "../Components/FadeUp";
import { Form, Input, Button } from "antd";

const { TextArea } = Input;

export default function Contact() {
  return (
    <div className="container-fluid m-0 p-0">

      {/* HERO */}
      <div className="position-relative">
        <img
          src={Banner}
          className="img-fluid w-100 rounded-bottom-5"
          alt="auxzn banner"
        />

        <div className="contact-hero-overlay text-center">
          <h1 className="fw-bold text-white">Contact Us</h1>
          <p className="text-light mt-2">
            Let’s connect and build reliable industrial solutions.
          </p>
        </div>
      </div>

      {/* NEW CLEAN CONTACT SECTION */}
      <section className="contact-clean-section">
        <div className="container">

          <div className="row align-items-start">

            {/* LEFT SIDE */}
            <div className="col-lg-5">
              <div className="contact-left">

                <h2>Let’s talk about your requirements</h2>

                <p>
                  Reach out to us for product inquiries, technical support,
                  or customized industrial solutions. Our team will get back
                  to you with the right guidance.
                </p>

                <div className="contact-meta">

                  <div>
                    <span>Phone</span>
                    <p>+91 98765 43210</p>
                  </div>

                  <div>
                    <span>Email</span>
                    <p>support@auxzn.com</p>
                  </div>

                  <div>
                    <span>Location</span>
                    <p>Tamil Nadu, India</p>
                  </div>

                </div>

              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="col-lg-7">

              <div className="contact-form-clean">

                <Form layout="vertical">

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Item label="Name">
                        <Input placeholder="Your name" />
                      </Form.Item>
                    </div>

                    <div className="col-md-6">
                      <Form.Item label="Email">
                        <Input placeholder="Your email" />
                      </Form.Item>
                    </div>
                  </div>

                  <Form.Item label="Subject">
                    <Input placeholder="Subject" />
                  </Form.Item>

                  <Form.Item label="Message">
                    <TextArea rows={5} placeholder="Your message" />
                  </Form.Item>

                  <Button className="contact-clean-btn" block>
                    Send Message
                  </Button>

                </Form>

              </div>

            </div>

          </div>

        </div>
      </section>

      <FadeUp className="w-100">
        <Footer />
      </FadeUp>

    </div>
  );
}