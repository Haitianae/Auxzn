import React from "react";
import { useState } from "react";
import "../App.css";
import Banner from "../Assets/Images/Auxzn banner.jpg";
import dayjs from "dayjs";

import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../Assets/Images/Auxznlogo.png";

import Footer from "../Components/Footer";
import FadeUp from "../Components/FadeUp";

import { Form, Input, Button, notification } from "antd";

const { TextArea } = Input;

export default function Contact() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const GAS_URL =
    "https://script.google.com/macros/s/AKfycbz5ce_XFHozZgM4cCNpkE_u9wRQiAD7MPRup_wKMsIyleNv2VlQmvqUpoH6FTPb3I7L/exec";

  /* FORM SUBMIT */
  const handleSubmit = async (values) => {
    try {
      setLoading(true);

      /* USER SYSTEM TIME */
      const submittedAt = dayjs().format("DD-MM-YYYY HH:mm:ss");

      /* PAYLOAD */
      const payload = {
        action: "submitContact",

        name: values.name || "",

        phone: values.phone || "",

        email: values.email || "",

        message: values.message || "",

        submittedAt,
      };

      /* FORM DATA */
      const formBody = new URLSearchParams(payload).toString();

      /* API CALL */
      const response = await fetch(GAS_URL, {
        method: "POST",

        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },

        body: formBody,
      });

      /* SAFER RESPONSE */
      const text = await response.text();

      let data = {};

      try {
        data = JSON.parse(text);
      } catch {
        throw new Error("Invalid server response");
      }

      /* SUCCESS */
      if (data.success) {
        notification.success({
          message: (
            <span
              style={{
                color: "#113156",
                fontWeight: 700,
              }}
            >
              Message Sent
            </span>
          ),

          description: (
            <span
              style={{
                color: "#113156",
              }}
            >
              Your message has been submitted successfully.
            </span>
          ),

          placement: "bottomRight",
        });

        form.resetFields();
      } else {
        throw new Error(data.error || "Submission failed");
      }
    } catch (error) {

      notification.error({
        message: (
          <span
            style={{
              color: "#d1343c",
              fontWeight: 700,
            }}
          >
            Submission Failed
          </span>
        ),

        description: (
          <span
            style={{
              color: "#113156",
            }}
          >
            Something went wrong. Please try again.
          </span>
        ),

        placement: "bottomLeft",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid m-0 p-0 contact-container">
      {/* HERO */}
      <div className="contact-hero-wrapper">
        <img
          src={Banner}
          className="img-fluid w-100 rounded-bottom-5"
          alt="auxzn banner"
        />
      </div>

      <FadeUp className="w-100">
        {/* WHY CONNECT SECTION */}
        <section className="why-contact-section">
          {/* ABSTRACTS */}
          <div className="why-contact-abstract-one"></div>

          <div className="container position-relative">
            {/* TITLE */}
            <div className="text-center mb-5">
              <span className="why-contact-badge">WHY AUXZN</span>

              <h2 className="why-contact-heading">
                Why Industries Trust{" "}
                <span>
                  <img
                    src={logo}
                    className="contact-Auxznlogo m-0"
                    alt="Auxzn logo"
                  />
                </span>
              </h2>

              <p className="why-contact-description mx-auto">
                We combine industrial expertise, engineering excellence and
                customer-focused support to deliver reliable solutions for
                modern manufacturing industries.
              </p>
            </div>

            {/* CARDS */}
            <div className="row g-4">
              {/* CARD 1 */}
              <div className="col-lg-4 col-md-6">
                <div className="why-contact-card">
                  <div className="why-contact-number">01</div>

                  <h4>Engineering Expertise</h4>

                  <p>
                    Our experienced technical team provides reliable industrial
                    guidance and solution support.
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="col-lg-4 col-md-6">
                <div className="why-contact-card">
                  <div className="why-contact-number">02</div>

                  <h4>Reliable Support</h4>

                  <p>
                    We ensure responsive communication and strong after-sales
                    support for all industrial requirements.
                  </p>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="col-lg-4 col-md-6 mx-md-auto">
                <div className="why-contact-card">
                  <div className="why-contact-number">03</div>

                  <h4>Industrial Innovation</h4>

                  <p>
                    AUXZN delivers advanced industrial technologies tailored for
                    modern manufacturing environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeUp>

      {/* CONTACT */}
      <FadeUp className="w-100">
        <section className="ultra-contact-section">
          <div className="container position-relative">
            {/* TITLE */}
            <div className="text-center ultra-contact-title-wrapper">
              <span className="ultra-contact-badge">CONTACT AUXZN</span>

              <h2 className="ultra-contact-heading">
                Let’s Build Better Industrial Solutions Together
              </h2>

              <p className="ultra-contact-description mx-auto">
                Reach out to our team for machinery solutions, engineering
                support and industrial consultation.
              </p>
            </div>

            <div className="row g-4 align-items-stretch">
              {/* LEFT */}
              <div className="col-lg-5 d-flex">
                <div className="ultra-contact-left w-100">
                  <div className="ultra-left-top">
                    <span className="left-mini-tag">AUXZN SUPPORT</span>

                    <h3>Talk With Our Experts</h3>

                    <p>
                      We are here to help you with all of your queries related
                      to Auxzn Products. Get support by Call, Email or submit
                      your feedback regarding our products and services.
                    </p>
                  </div>

                  <div className="ultra-contact-info-wrapper">
                    {/* PHONE */}
                    <div className="ultra-contact-info-card">
                      <div className="ultra-contact-icon">
                        <FontAwesomeIcon icon={faPhone} />
                      </div>

                      <div>
                        <span>Phone Number</span>
                        <h6>+91 98765 43210</h6>
                      </div>
                    </div>

                    {/* EMAIL */}
                    <div className="ultra-contact-info-card">
                      <div className="ultra-contact-icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>

                      <div>
                        <span>Email Address</span>
                        <h6>support@auxzn.com</h6>
                      </div>
                    </div>

                    {/* ADDRESS */}
                    <div className="ultra-contact-info-card">
                      <div className="ultra-contact-icon">
                        <FontAwesomeIcon icon={faLocationDot} />
                      </div>

                      <div>
                        <span>Location</span>

                        <h6 className="contact-address-text">
                          No. 00, Industrial Avenue,
                          <br />
                          Street, City,
                          <br />
                          UAE - 123456
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="col-lg-7 d-flex">
                <div className="ultra-contact-form-wrapper w-100">
                  {/* ABSTRACTS */}
                  <div className="form-industrial-panel"></div>
                  <div className="form-industrial-red-glow"></div>
                  <div className="form-industrial-lines"></div>

                  {/* TOP */}
                  <div className="contact-form-top">
                    <span className="form-mini-badge">SEND MESSAGE</span>

                    <h3>Let’s Start a Conversation</h3>

                    <p>
                      Fill out the form and our team will contact you shortly.
                    </p>
                  </div>

                  <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    {" "}
                    <div className="row">
                      {/* NAME */}
                      <div className="col-md-6">
                        <Form.Item
                          label="Name"
                          name="name"
                          rules={[
                            {
                              required: true,
                              message: "Please enter your name",
                            },
                            {
                              pattern: /^[A-Za-z\s]+$/,
                              message: "Name should contain only letters",
                            },
                          ]}
                        >
                          <Input placeholder="Enter your full name" />
                        </Form.Item>
                      </div>

                      {/* PHONE */}
                      <div className="col-md-6">
                        <Form.Item
                          label="Phone Number"
                          name="phone"
                          rules={[
                            {
                              required: true,
                              message: "Please enter phone number",
                            },
                            {
                              pattern: /^[+0-9\s]{10,20}$/,
                              message: "Please enter a valid phone number",
                            },
                          ]}
                        >
                          <Input
                            placeholder="Enter phone number"
                            maxLength={20}
                          />
                        </Form.Item>
                      </div>
                    </div>
                    {/* EMAIL */}
                    <Form.Item
                      label="Email Address"
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please enter email address",
                        },
                        {
                          type: "email",
                          message: "Enter valid email address",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your email address" />
                    </Form.Item>
                    {/* MESSAGE */}
                    <Form.Item
                      label="Message"
                      name="message"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your message",
                        },
                        {
                          max: 300,
                          message: "Message cannot exceed 300 characters",
                        },
                      ]}
                    >
                      <TextArea
                        rows={5}
                        maxLength={300}
                        showCount
                        placeholder="Write your message..."
                      />
                    </Form.Item>
                    {/* BUTTON */}
                    <Button
                      htmlType="submit"
                      className="ultra-contact-btn"
                      block
                      loading={loading}
                    >
                      <span>{loading ? "Sending..." : "Send Message"}</span>

                      {!loading && (
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="contact-btn-arrow"
                        />
                      )}
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeUp>

      <FadeUp className="w-100">
        <Footer />
      </FadeUp>
    </div>
  );
}
