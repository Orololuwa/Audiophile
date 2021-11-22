import Cart from "containers/cart";
import Main from "./styled";

const Content = (props) => (
  <Main>
    <Cart />
    {props.children}
  </Main>
);

export default Content;
