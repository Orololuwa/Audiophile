import Image from "next/image";
import CartItemCtx from "./styled";
import { currencyFormatter, getSlugAbbrev } from "utilities";
import propTypes from "prop-types";

const CheckoutItem = ({ value, src, slug, price }) => {
  return (
    <CartItemCtx>
      <div className="product-info">
        <Image src={src} width={50} height={50} className="image" />
        <span>
          <h5>{getSlugAbbrev(slug)}</h5>
          <p>$ {currencyFormatter(price)}</p>
        </span>
      </div>
      <h6 style={{ fontWeight: "200" }}>x{value}</h6>
    </CartItemCtx>
  );
};

CheckoutItem.propTypes = {
  count: propTypes.number,
  src: propTypes.string,
  slug: propTypes.string,
  price: propTypes.number,
};

export default CheckoutItem;
