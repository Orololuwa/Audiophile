import Backdrop from "components/backdrop";
import CartCtx from "./styled";
import Button from "components/Button";
import { useSelector, useDispatch } from "react-redux";
import { currencyFormatter } from "utilities";
import actions from "redux/cart/actions";
import CartItem from "./CartItem";
import { useEffect } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const { productsInCart, total } = useSelector((state) => ({
    productsInCart: state.cart.products,
    total: state.cart.total,
  }));

  useEffect(() => {
    console.log(productsInCart);
  }, [productsInCart.length]);

  const toggleCartDisplay = () => {
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
          <p className="clearcart">remove all</p>
        </div>
        <div className="body">
          {productsInCart &&
            productsInCart.map((product, idx) => (
              <CartItem product={product} key={product.id} />
            ))}
          <div className="totals">
            <p>TOTAL</p>
            <h6>$ {currencyFormatter(total)}</h6>
          </div>
        </div>
        <div className="footer">
          <Button colorScheme="orange">CHECK OUT</Button>
        </div>
      </CartCtx>
    </>
  );
};

export default Cart;
