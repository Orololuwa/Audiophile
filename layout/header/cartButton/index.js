import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import actions from "redux/cart/actions";
import CartButtonCtx from "./styled";
import theme from "theme";

const CartButton = () => {
  const dispatch = useDispatch();
  const { bumpCart, cartLength } = useSelector((state) => ({
    bumpCart: state.cart.cartBump,
    cartLength: state.cart.products.length,
  }));

  const toggleCartDisplay = () => {
    dispatch(actions.toggleCartDisplay());
  };

  return (
    <CartButtonCtx>
      <div className="badge" style={{ opacity: cartLength === 0 ? 0 : 1 }}>
        {cartLength}
      </div>
      <IoCartOutline
        color={theme.colors.white}
        size={25}
        style={{ cursor: "pointer" }}
        onClick={toggleCartDisplay}
        className={bumpCart ? "bump" : ""}
      />
    </CartButtonCtx>
  );
};

export default CartButton;
