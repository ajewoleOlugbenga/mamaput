import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "./store/CartContext";
import { Formatter } from "../utils/Formatting";
import UserProgressContext from "./store/UserProgressContext";
import Button from "./UI/Button";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id} className="cart-item">
            <p>
              {item.name} - {item.quantity} × {Formatter.format(item.price)}
            </p>
            <p className="cart-item-actions">
              <button onClick={() => cartCtx.removeItem(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => cartCtx.addItem(item)}>+</button>
            </p>
          </li>
        ))}
      </ul>
      <p className="cart-total">{Formatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly={true} onClick={handleCloseCart}>
          close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button textOnly={false} onClick={handleGoToCheckout}>
            Go to Checkout
          </Button>
        )}
      </p>
    </Modal>
  );
};

export default Cart;
