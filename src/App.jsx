import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  function addToCart(item) {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (cartItem) => cartItem.name === item.name
      );

      if (existingItem) {
        return currentItems.map((cartItem) =>
          cartItem.name === item.name
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      return [
        ...currentItems,
        {
          ...item,
          quantity: 1,
        },
      ];
    });

    setCartOpen(true);
  }

  function increaseQuantity(itemName) {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.name === itemName
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  function decreaseQuantity(itemName) {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.name === itemName
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(itemName) {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.name !== itemName)
    );
  }
 function finishOrder() {
  setCartItems([]);
  setCartOpen(false);

  setTimeout(() => {
    document
      .getElementById("menu")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }, 100);
}
    function addMoreItems() {
  setCartOpen(false);

  setTimeout(() => {
    document
      .getElementById("menu")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }, 100);
}

  return (
    <div>
      <Navbar
  cartItems={cartItems}
  onCartClick={() => setCartOpen(true)}
/>

      <Hero />
<Menu
  onAddToCart={addToCart}
  cartItems={cartItems}
/>

      <About />

      <Gallery />

      <Testimonials />

      <Contact />

      <Footer />

      {cartOpen && (
       <Cart
  cartItems={cartItems}
  onIncrease={increaseQuantity}
  onDecrease={decreaseQuantity}
  onRemove={removeItem}
  onClose={finishOrder}
  onAddMore={addMoreItems}
/>
      )}
    </div>
  );
}

export default App;