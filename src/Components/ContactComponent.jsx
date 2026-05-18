import { useNavigate } from "react-router-dom";

export default function ContactComponent() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);

    // Scroll to top after navigation
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
      <section className="contact-section py-5">
        <div className="container">
          <div className="contact-banner row align-items-center g-0 overflow-hidden">
            
            {/* LEFT CONTENT */}
            <div className="col-lg-7">
              <div className="contact-content">
                <h2 className="contact-heading">
                  Feel free to reach us!
                </h2>

                <p className="contact-description">
                  Whether you need support, product information, or customized
                  industrial solutions, our team is ready to help you with
                  reliable guidance and quick assistance.
                </p>

                <div className="d-flex flex-wrap gap-3 mt-4">

                  {/* CONTACT BUTTON */}
                  <button
                    className="contact-btn"
                    onClick={() => handleNavigate("/contact")}
                  >
                    Contact Us
                  </button>

                  {/* PRODUCT BUTTON */}
                  <button
                    className="contact-outline-btn"
                    onClick={() => handleNavigate("/products")}
                  >
                    Explore Products
                  </button>

                </div>
              </div>
            </div>

            {/* RIGHT SIDE DESIGN */}
            <div className="col-lg-5">
              <div className="contact-visual">
                <div className="contact-box contact-box-1"></div>
                <div className="contact-box contact-box-2"></div>
                <div className="contact-box contact-box-3"></div>

                <div className="contact-circle"></div>

                <div className="contact-card-floating">
                  <h4>24/7 Support</h4>
                  <p>Reliable industrial assistance worldwide.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
  );
}