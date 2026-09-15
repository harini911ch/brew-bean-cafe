function Gallery() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
      alt: "Freshly brewed coffee",
    },
    {
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=85",
      alt: "Cozy cafe interior",
    },
    {
      src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=85",
      alt: "Coffee shop atmosphere",
    },
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
      alt: "Cafe dining area",
    },
    {
      src: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&w=900&q=85",
      alt: "Coffee and pastry",
    },
    {
      src: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=900&q=85",
      alt: "Latte coffee",
    },
  ];

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-heading">
        <p className="section-label">OUR SPACE</p>

        <h2>
          A little corner of
          <br />
          <span>coffee & comfort.</span>
        </h2>

        <p>
          Take a peek inside Brew & Bean — warm corners,
          delicious moments and plenty of good coffee.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.src} alt={image.alt} />

            <div className="gallery-overlay">
              <span>☕</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;