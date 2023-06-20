import { CartItem } from "./CartItem";
import { ShoppingCart } from "./ShoppingCart";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";

export function Cart() {
  const { cartItems, removeFromCart } = useShoppingCart();

  const totalPrice = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  return (
    <div style={{ backgroundColor: "light-grey" }}>
      {cartItems.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <div style={{color:"#00fa7d"}}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-3 text-#00fa7d ">
            Total: {formatCurrency(totalPrice)}
          </div>
          <div style={{ marginTop: "1.2rem" }}>
            <Link
              to="/paymentpage"
              style={{ width: "100%" }}
              className="btn btn-primary btn-lg btn-block"
            >
              Proceed to Payment
            </Link>
          </div>
        </div>
      )}

      <ShoppingCart isOpen={false} totalAmount={totalPrice} /> 
    </div>
  );
}