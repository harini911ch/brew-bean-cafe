function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">
            <span>☕</span>
            Brew & Bean
          </div>

          <p>
            Good coffee, good food and good moments —
            all under one roof.
          </p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>

          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#reviews">Reviews</a>
        </div>

        <div className="footer-links">
          <h4>Visit Us</h4>

          <p>12 Coffee Street</p>
          <p>Hyderabad, India</p>
          <p>8:00 AM – 10:00 PM</p>
        </div>

        <div className="footer-links">
          <h4>Follow Along</h4>

          <div className="social-links">
            <a href="#" aria-label="Instagram">
              Instagram
            </a>

            <a href="#" aria-label="Facebook">
              Facebook
            </a>

            <a href="#" aria-label="Google">
              Google
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Brew & Bean Café. All rights reserved.
        </p>

        <p>
          Crafted with ☕ &amp; care.
        </p>
      </div>
    </footer>
  );
}

export default Footer;