import React from "react";
import FadeUp from "../../Components/FadeUp";
import Banner from "../../Assets/Images/Auxzn banner.jpg";
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

export default function Product1() {
  return (
    <div className="container-fluid m-0 p-0">
      <img
        src={Banner}
        className="img-fluid w-100 rounded-bottom-5"
        alt="auxzn banner"
      />
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
