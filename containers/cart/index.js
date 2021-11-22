import Backdrop from "components/backdrop";
import CartCtx, { CartItem } from "./styled";
import Image from "next/image";
import { InputNumber } from "components/input";
import Button from "components/Button";
import { useSelector, useDispatch } from "react-redux";
import { currencyFormatter, getSlugAbbrev } from "utilities";
import actions from "redux/cart/actions";

const Cart = () => {
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.cart.products);

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
            productsInCart.map((product) => (
              <CartItem key={product.id}>
                <div className="product-info">
                  <Image
                    src={product.image.mobile}
                    width={50}
                    height={50}
                    className="image"
                  />
                  <span>
                    <h5>{getSlugAbbrev(product.slug)}</h5>
                    <p>$ {currencyFormatter(product.price)}</p>
                  </span>
                </div>
                <InputNumber defaultValue={product.count} />
              </CartItem>
            ))}
          <div className="totals">
            <p>TOTAL</p>
            <h6>$ 656.67</h6>
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
