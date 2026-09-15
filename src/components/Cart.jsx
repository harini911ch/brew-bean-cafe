import { useState } from "react";

function Cart({
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
  onClose,
  onAddMore,
}) {
  const [billGenerated, setBillGenerated] = useState(false);
  const [orderNumber] = useState(
  () => `BB-${Math.floor(1000 + Math.random() * 9000)}`
);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.priceValue * item.quantity,
    0
  );

  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="cart-overlay">
      <div className="cart-panel">
        {billGenerated ? (
          <div className="bill-view">
            <div className="bill-success-icon">✓</div>

            <p className="section-label">ORDER CONFIRMED</p>

            <h2>Thank You!</h2>

            <p className="bill-subtitle">
              Here's your Brew & Bean bill.
            </p>

            <div className="bill-receipt">
              <div className="bill-receipt-header">
                <div>
                  <h3>Brew & Bean</h3>
                  <p>Good coffee. Good moments.</p>
                </div>

                <span>☕</span>
              </div>

              <div className="bill-divider"></div>

              <div className="bill-info">
                <div>
                  <span>Order No.</span>
                  <strong>BB-1024</strong>
                </div>

                <div>
                  <span>Date</span>
                 <strong>
  {new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  })}
</strong>
                </div>
              </div>

              <div className="bill-divider"></div>

              <div className="bill-items">
                {cartItems.map((item) => (
                  <div className="bill-item" key={item.name}>
                    <div>
                      <strong>{item.name}</strong>

                      <span>
                        ₹{item.priceValue} × {item.quantity}
                      </span>
                    </div>

                    <strong>
                      ₹{item.priceValue * item.quantity}
                    </strong>
                  </div>
                ))}
              </div>

              <div className="bill-divider"></div>

              <div className="bill-summary">
                <div>
                  <span>Subtotal</span>
                  <strong>₹{subtotal.toFixed(0)}</strong>
                </div>

                <div>
                  <span>GST (5%)</span>
                  <strong>₹{tax.toFixed(0)}</strong>
                </div>

                <div className="bill-grand-total">
                  <span>Total</span>
                  <strong>₹{total.toFixed(0)}</strong>
                </div>
              </div>

              <div className="bill-thank-you">
                Thank you for choosing Brew & Bean ☕
              </div>
            </div>

            <button
              type="button"
              className="bill-done-btn"
              onClick={onClose}
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="cart-header">
              <div>
                <p className="section-label">YOUR ORDER</p>
                <h2>Your Cart</h2>
              </div>

              <button
                type="button"
                className="cart-close"
                onClick={onClose}
              >
                ×
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <div>☕</div>

                <h3>Your cart is empty</h3>

                <p>
                  Add something delicious from our menu
                  to get started.
                </p>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cartItems.map((item) => (
                    <div className="cart-item" key={item.name}>
                      <div className="cart-item-icon">
                        {item.icon}
                      </div>

                      <div className="cart-item-details">
                        <h3>{item.name}</h3>

                        <span>
                          ₹{item.priceValue} × {item.quantity}
                        </span>

                        <div className="quantity-controls">
                          <button
                            type="button"
                            onClick={() =>
                              onDecrease(item.name)
                            }
                          >
                            −
                          </button>

                          <strong>{item.quantity}</strong>

                          <button
                            type="button"
                            onClick={() =>
                              onIncrease(item.name)
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="cart-item-right">
                        <strong>
                          ₹
                          {item.priceValue *
                            item.quantity}
                        </strong>

                        <button
                          type="button"
                          className="remove-item"
                          onClick={() =>
                            onRemove(item.name)
                          }
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-summary">
                  <div>
                    <span>Subtotal</span>
                    <strong>
                      ₹{subtotal.toFixed(0)}
                    </strong>
                  </div>

                  <div>
                    <span>GST (5%)</span>
                    <strong>
                      ₹{tax.toFixed(0)}
                    </strong>
                  </div>

                  <div className="cart-total">
                    <span>Total</span>
                    <strong>
                      ₹{total.toFixed(0)}
                    </strong>
                  </div>

                  <button
                    type="button"
                    className="add-more-btn"
                    onClick={onAddMore}
                  >
                    + Add More Items
                  </button>

                  <button
                    type="button"
                    className="checkout-btn"
                    onClick={() => setBillGenerated(true)}
                  >
                    Generate Bill
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;