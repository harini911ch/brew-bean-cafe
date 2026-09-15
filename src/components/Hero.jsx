function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-label">
          COFFEE • FOOD • GOOD MOMENTS
        </p>

        <h1>
          Your Daily
          <br />
          <span>Cup of Comfort.</span>
        </h1>

        <p className="hero-description">
          Freshly brewed coffee, handcrafted treats and a cozy
          space made for slow mornings, meaningful conversations
          and everything in between.
        </p>

        <div className="hero-buttons">
          <a href="#menu" className="primary-btn">
            Explore Our Menu
          </a>

          <a href="#about" className="secondary-btn">
            Our Story
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="hero-image-frame">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85"
            alt="Freshly brewed coffee"
          />
        </div>

        <div className="hero-badge">
          <span>☕</span>

          <div>
            <strong>Freshly Brewed</strong>
            <small>Every single day</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;