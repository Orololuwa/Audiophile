import { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import CartItemCtx from "./styled";
import { InputNumber } from "components/input";
import { updateCart } from "redux/cart/actionCreators";
import { currencyFormatter, getSlugAbbrev } from "utilities";
import propTypes from "prop-types";

const CartItem = ({ product, checkout }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(product.count);

  useEffect(() => {
    dispatch(updateCart(product, value));
  }, [value]);

  const onIncrement = () => {
    setValue((prev) => {
      return prev + 1;
    });
    //dispatch(updateCart(product, value));
  };

  const onDecrement = () => {
    setValue((prev) => {
      if (prev === 0) {
        return prev;
      }
      return prev - 1;
    });
  };

  return (
    <CartItemCtx key={product.id}>
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
      {!checkout && (
        <InputNumber
          value={value}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      )}
      {checkout && <h3 style={{ fontWeight: "300" }}>x{value}</h3>}
    </CartItemCtx>
  );
};

CartItem.propTypes = {
  product: propTypes.object,
  checkout: propTypes.any,
};

export default CartItem;
