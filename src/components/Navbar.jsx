import { useState } from "react";

function Navbar({ cartItems, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <span>☕</span>
        Brew & Bean
      </div>

      <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#menu" onClick={closeMenu}>Menu</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#gallery" onClick={closeMenu}>Gallery</a>
        <a href="#reviews" onClick={closeMenu}>Reviews</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>

      <div className="nav-actions">
        <button
          type="button"
          className="nav-cart"
          onClick={onCartClick}
          aria-label="Open cart"
        >
          <span className="cart-icon">🛒</span>

          {cartCount > 0 && (
            <span className="cart-badge">
              {cartCount}
            </span>
          )}
        </button>

        <a
          href="#contact"
          className="nav-button"
          onClick={closeMenu}
        >
          Visit Us
        </a>

        <button
          type="button"
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;