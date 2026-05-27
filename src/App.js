import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products/Products";
import Blogs from "./Pages/Blogs/Blogs";
import Blog1 from "./Pages/Blogs/Blog1";
import Contact from "./Pages/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import StandardHopperDryer from "./Pages/Products/Dehumidifier product sub pages/StandardHopperDryer";
import Dehumidifying from "./Pages/Products/Dehumidifying";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/drying-and-dehumidifying" element={<Dehumidifying />} />
                <Route path="/products/standard-hopper-dryer" element={<StandardHopperDryer />} />

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/future-of-blow-molding" element={<Blog1 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* PREMIUM WHATSAPP BUTTON */}

      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-premium"
      >
        <span className="whatsapp-ping"></span>

        <span className="whatsapp-tooltip">Chat With Us</span>

        <FontAwesomeIcon icon={faWhatsapp} beat />
      </a>
    </HashRouter>
  );
}

export default App;
