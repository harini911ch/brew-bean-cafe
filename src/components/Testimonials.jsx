function Testimonials() {
  const testimonials = [
    {
      name: "Ananya Reddy",
      role: "Regular Guest",
      review:
        "Brew & Bean has become my favourite place for weekend coffee. The ambience is so warm and peaceful, and their cappuccino is amazing!",
    },
    {
      name: "Rahul Sharma",
      role: "Coffee Lover",
      review:
        "The coffee is excellent, but what I love most is the atmosphere. Perfect place to catch up with friends or get some work done.",
    },
    {
      name: "Sneha Kapoor",
      role: "Happy Guest",
      review:
        "Their pastries are fresh, the staff is lovely and the whole place feels so welcoming. Definitely coming back again!",
    },
  ];

  return (
<section className="testimonials-section" id="reviews">      <div className="testimonials-heading">
        <p className="section-label">KIND WORDS</p>

        <h2>
          Loved by our
          <br />
          <span>coffee community.</span>
        </h2>

        <p>
          Good coffee brings people together. Here's what some
          of our guests have to say.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.name}>
            <div className="stars">★★★★★</div>

            <p className="testimonial-review">
              "{testimonial.review}"
            </p>

            <div className="testimonial-person">
              <div className="person-avatar">
                {testimonial.name.charAt(0)}
              </div>

              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;