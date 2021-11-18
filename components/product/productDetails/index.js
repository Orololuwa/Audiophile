import ProductDetailCtx from "./styled";
import propTypes from "prop-types";
import Col from "components/col";
import Button from "components/Button";
import Image from "next/image";
import { useRouter } from "next/router";
import { currencyFormatter } from "utilities";

const ProductDetail = (props) => {
  const { idx, name, description, image, id, price, features, includes } =
    props;

  const router = useRouter();
  const pushProductPage = () => {
    router.push(`${router.pathname}/${id}`);
  };

  return (
    <ProductDetailCtx
      direction={idx % 2 === 1 ? "row-reverse" : "row"}
      gap="3.5rem"
      justifyContent="space-around"
      className="flex"
      {...props}
    >
      <Image
        src={image.desktop}
        height={500}
        width={400}
        objectFit="contain"
        objectPosition="center center"
        className="product-image"
        alt={name}
      />
      <Col className="product-content">
        <h5>NEW PRODUCT</h5>
        <h1>{name}</h1>
        <p>{description}</p>
        <strong>${currencyFormatter(price)}</strong>
        <span>
          <Button variant="filled" colorScheme="gray">
            1
          </Button>
          <Button variant="filled" colorScheme="orange">
            ADD TO CART
          </Button>
        </span>
      </Col>
      <Col className="product-content">
        <h3>FEATURES</h3>
        {features.map((feature, idx) => {
          return feature.length ? <p key={idx}>{feature}</p> : null;
        })}
      </Col>
      <Col className="product-content align-self-start">
        <h3>IN THE BOX</h3>
        {includes.map((item, idx) => (
          <div key={idx} className="item-listing">
            <h4>{item.quantity}x</h4>
            <p>{item.item}</p>
          </div>
        ))}
      </Col>
    </ProductDetailCtx>
  );
};

ProductDetail.propTypes = {
  idx: propTypes.number,
  name: propTypes.string,
  description: propTypes.string,
  image: propTypes.string,
  id: propTypes.number,
  price: propTypes.number,
  features: propTypes.arrayOf(propTypes.string),
  includes: propTypes.array,
};

export default ProductDetail;
