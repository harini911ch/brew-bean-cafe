import { useState } from "react";

function Menu({ onAddToCart, cartItems }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const menuCategories = [
    {
      title: "Coffee & Beverages",
      items: [
        {
          icon: "☕",
          name: "Classic Cappuccino",
          description:
            "Rich espresso with smooth steamed milk and soft foam.",
          price: "₹180",
          priceValue: 180,
        },
        {
          icon: "☕",
          name: "Caramel Latte",
          description:
            "Creamy espresso latte finished with sweet caramel.",
          price: "₹210",
          priceValue: 210,
        },
        {
          icon: "🍫",
          name: "Mocha Delight",
          description:
            "Creamy espresso blended with chocolate and steamed milk.",
          price: "₹220",
          priceValue: 220,
        },
        {
          icon: "🍵",
          name: "Green Tea",
          description:
            "Light and refreshing tea made from premium green leaves.",
          price: "₹130",
          priceValue: 130,
        },
      ],
    },

    {
      title: "Freshly Baked",
      items: [
        {
          icon: "🥐",
          name: "Butter Croissant",
          description:
            "Flaky, buttery and freshly baked for the perfect morning.",
          price: "₹140",
          priceValue: 140,
        },
        {
          icon: "🍪",
          name: "Chocolate Chip Cookies",
          description:
            "Crispy edges, soft center and loaded with chocolate chips.",
          price: "₹120",
          priceValue: 120,
        },
        {
          icon: "🧁",
          name: "Vanilla Cupcake",
          description:
            "Soft vanilla sponge topped with smooth creamy frosting.",
          price: "₹150",
          priceValue: 150,
        },
        {
          icon: "🥨",
          name: "Cinnamon Roll",
          description:
            "Warm, fluffy pastry layered with cinnamon and sweet glaze.",
          price: "₹170",
          priceValue: 170,
        },
      ],
    },

    {
      title: "Pizza & Savoury",
      items: [
        {
          icon: "🍕",
          name: "Margherita Pizza",
          description:
            "Classic pizza with tomato, mozzarella and fresh basil.",
          price: "₹280",
          priceValue: 280,
        },
        {
          icon: "🍕",
          name: "Farmhouse Pizza",
          description:
            "Loaded with fresh vegetables, cheese and Italian herbs.",
          price: "₹320",
          priceValue: 320,
        },
        {
          icon: "🥪",
          name: "Grilled Sandwich",
          description:
            "Crispy toasted bread filled with fresh veggies and cheese.",
          price: "₹220",
          priceValue: 220,
        },
        {
          icon: "🌯",
          name: "Veggie Wrap",
          description:
            "Fresh vegetables, creamy dressing and herbs wrapped together.",
          price: "₹200",
          priceValue: 200,
        },
      ],
    },

    {
      title: "Desserts",
      items: [
        {
          icon: "🍰",
          name: "Chocolate Cake",
          description:
            "Moist chocolate cake layered with silky chocolate cream.",
          price: "₹190",
          priceValue: 190,
        },
        {
          icon: "🍮",
          name: "Classic Cheesecake",
          description:
            "Creamy baked cheesecake with a delicate biscuit base.",
          price: "₹220",
          priceValue: 220,
        },
        {
          icon: "🍨",
          name: "Coffee Ice Cream",
          description:
            "Smooth and creamy ice cream infused with rich coffee flavour.",
          price: "₹160",
          priceValue: 160,
        },
        {
          icon: "🍫",
          name: "Brownie",
          description:
            "Warm fudgy chocolate brownie with a rich cocoa flavour.",
          price: "₹150",
          priceValue: 150,
        },
      ],
    },
  ];

  const visibleCategories =
    activeCategory === "All"
      ? menuCategories
      : menuCategories.filter(
          (category) => category.title === activeCategory
        );

  return (
    <section className="menu-section" id="menu">
      <div className="menu-heading">
        <p className="section-label">OUR MENU</p>

        <h2>
          Made with love,
          <br />
          <span>served with warmth.</span>
        </h2>

        <p>
          From your first morning coffee to an evening treat,
          there's always something delicious waiting for you.
        </p>

        <div className="menu-category-nav">
          {[
            "All",
            "Coffee & Beverages",
            "Freshly Baked",
            "Pizza & Savoury",
            "Desserts",
          ].map((category) => (
            <button
              key={category}
              type="button"
              className={`menu-category-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {visibleCategories.map((category) => (
        <div
  className="menu-category"
  key={`${activeCategory}-${category.title}`}
>
          {activeCategory === "All" && (
            <h3 className="category-title">
              {category.title}
            </h3>
          )}

          <div className="menu-grid">
            {category.items.map((item) => {
              const cartItem = cartItems.find(
                (cartItem) => cartItem.name === item.name
              );

              return (
                <div
                  className="menu-card"
                  key={item.name}
                >
                  <div className="menu-icon">
                    {item.icon}
                  </div>

                  <div className="menu-card-content">
                    <div className="menu-title-row">
                      <h3>{item.name}</h3>
                      <span>{item.price}</span>
                    </div>

                    <p>{item.description}</p>

                    <button
                      type="button"
                      className={`add-to-cart-btn ${
                        cartItem
                          ? "added-to-cart-btn"
                          : ""
                      }`}
                      onClick={() => onAddToCart(item)}
                    >
                      {cartItem
                        ? `✓ Added to Cart · ${cartItem.quantity}`
                        : "+ Add to Cart"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Menu;