import Cart from "containers/cart";
import Main from "./styled";
import { useSelector } from "react-redux";

const Content = (props) => {
  const cartShow = useSelector((state) => state.cart.cartShow);
  return (
    <Main>
      {cartShow && <Cart />}
      {props.children}
    </Main>
  );
};

export default Content;
