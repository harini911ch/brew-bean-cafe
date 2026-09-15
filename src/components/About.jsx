function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-image">
        <div className="about-image-frame">
          <img
            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=85"
            alt="Cozy Brew & Bean cafe"
          />
        </div>

        <div className="about-note">
          <span>🤎</span>
          <div>
            <strong>Made with care</strong>
            <small>Since 2018</small>
          </div>
        </div>
      </div>

      <div className="about-content">
        <p className="section-label">OUR STORY</p>

        <h2>
          More than coffee,
          <br />
          <span>it's a feeling.</span>
        </h2>

        <p>
          Brew & Bean started with a simple idea — create a warm,
          welcoming place where great coffee and good conversations
          come together.
        </p>

        <p>
          From carefully selected coffee beans to freshly baked
          pastries, every little detail is prepared with love.
          Whether you're starting your morning, catching up with
          friends or simply enjoying some quiet time, there's
          always a seat waiting for you.
        </p>

        <div className="about-stats">
          <div>
            <strong>8+</strong>
            <span>Years of Love</span>
          </div>

          <div>
            <strong>25+</strong>
            <span>Menu Favourites</span>
          </div>

          <div>
            <strong>10k+</strong>
            <span>Happy Guests</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;