import ProductListingCtx from "./styled";
import propTypes from "prop-types";
import Col from "components/col";
import Button from "components/Button";
import Image from "next/image";
import { useRouter } from "next/router";

const ProductListing = (props) => {
  const { idx, name, description, image, id } = props;

  const router = useRouter();
  const pushProductPage = () => {
    router.push(`${router.pathname}/${id}`);
  };

  return (
    <ProductListingCtx
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
        <Button variant="filled" colorScheme="orange" onClick={pushProductPage}>
          SEE PRODUCT
        </Button>
      </Col>
    </ProductListingCtx>
  );
};

ProductListing.propTypes = {
  idx: propTypes.number,
  name: propTypes.string,
  description: propTypes.string,
  image: propTypes.string,
  id: propTypes.number,
};

export default ProductListing;
