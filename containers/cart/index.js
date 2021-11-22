import Backdrop from "components/backdrop";
import CartCtx, { CartItem } from "./styled";
import Image from "next/image";
import { InputNumber } from "components/input";
import Button from "components/Button";

const Cart = () => {
  return (
    <>
      <Backdrop />
      <CartCtx>
        <div className="header">
          <span>
            <p>Cart</p>
            <p>(3)</p>
          </span>
          <p className="clearcart">remove all</p>
        </div>
        <div className="body">
          <CartItem>
            <div className="product-info">
              <Image
                src="/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg"
                width={50}
                height={50}
                className="image"
              />
              <span>
                <h5>XX 99 MKII</h5>
                <p>$ 2.999</p>
              </span>
            </div>
            <InputNumber />
          </CartItem>
          <CartItem>
            <div className="product-info">
              <Image
                src="/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg"
                width={50}
                height={50}
                className="image"
              />
              <span>
                <h5>XX 99 MKII</h5>
                <p>$ 2.999</p>
              </span>
            </div>
            <InputNumber />
          </CartItem>
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
