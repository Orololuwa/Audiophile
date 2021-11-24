import Backdrop from "components/backdrop";
import CartCtx from "./styled";
import Button from "components/Button";
import { useSelector, useDispatch } from "react-redux";
import { currencyFormatter } from "utilities";
import actions from "redux/cart/actions";
import CartItem from "./CartItem";
import { clearCart } from "redux/cart/actionCreators";
import router from "next/router";

const Cart = () => {
  const dispatch = useDispatch();
  const { productsInCart, total } = useSelector((state) => ({
    productsInCart: state.cart.products,
    total: state.cart.total,
  }));

  const toggleCartDisplay = () => {
    dispatch(actions.toggleCartDisplay());
  };

  const removeAllFromCart = () => {
    dispatch(clearCart());
  };

  const pushCheckout = () => {
    if (total === 0) return;
    router.push("/checkout");
    dispatch(actions.toggleCartDisplay());
  };

  return (
    <>
      <Backdrop onConfirm={toggleCartDisplay} />
      <CartCtx>
        <div className="header">
          <span>
            <p>Cart</p>
            <p>({productsInCart.length})</p>
          </span>
          <p className="clearcart" onClick={removeAllFromCart}>
            remove all
          </p>
        </div>
        <div className="body">
          {productsInCart.map((product) => (
            <CartItem product={product} key={product.id} />
          ))}
          <div className="totals">
            <p>TOTAL</p>
            <h6>$ {currencyFormatter(total)}</h6>
          </div>
        </div>
        <div className="footer">
          <Button
            colorScheme="orange"
            disabled={total === 0}
            onClick={pushCheckout}
          >
            CHECK OUT
          </Button>
        </div>
      </CartCtx>
    </>
  );
};

export default Cart;
