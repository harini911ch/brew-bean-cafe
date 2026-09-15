import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <p className="section-label">COME SAY HELLO</p>

        <h2>
          Your table is
          <br />
          <span>waiting for you.</span>
        </h2>

        <p className="contact-description">
          Whether you're here for your morning coffee, a quick
          lunch or a long conversation with friends, we'd love
          to have you at Brew & Bean.
        </p>

        <div className="contact-details">
          <div className="contact-detail">
            <span>📍</span>
            <div>
              <strong>Visit Us</strong>
              <p>12 Coffee Street, Hyderabad</p>
            </div>
          </div>

          <div className="contact-detail">
            <span>🕒</span>
            <div>
              <strong>Opening Hours</strong>
              <p>Mon – Sun: 8:00 AM – 10:00 PM</p>
            </div>
          </div>

          <div className="contact-detail">
            <span>📞</span>
            <div>
              <strong>Call Us</strong>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-detail">
            <span>✉️</span>
            <div>
              <strong>Email</strong>
              <p>hello@brewandbean.com</p>
            </div>
          </div>
        </div>
      </div>

     <div className="contact-form-wrapper">
  {submitted ? (
    <div className="contact-success">
      <div className="success-icon">✓</div>

      <h3>Message Sent!</h3>

      <p>
        Thank you for reaching out to Brew & Bean.
        We'll get back to you soon. ☕
      </p>

      <button
        type="button"
        className="success-back-btn"
        onClick={() => setSubmitted(false)}
      >
        Send Another Message
      </button>
    </div>
  ) : (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Send us a message</h3>

      <p>
        Have a question or want to reserve a table?
        Drop us a message.
      </p>

      <div className="form-group">
        <label htmlFor="name">Your Name</label>

        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>

        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>

        <textarea
          id="message"
          rows="4"
          placeholder="How can we help?"
          required
        ></textarea>
      </div>

      <button type="submit" className="contact-submit">
        Send Message
      </button>
    </form>
  )}
</div>
    </section>
  );
}

export default Contact;