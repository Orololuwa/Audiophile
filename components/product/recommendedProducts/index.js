import RecommendedProductCtx from "./styled";
import ImageCard from "./ImageCard";
import Flex from "components/flex";
import Col from "components/col";
import Button from "components/Button";
import propTypes from "prop-types";
import { useRouter } from "next/router";
import data from "data.json";

const RecommendedProduct = (props) => {
  const { products } = props;
  const router = useRouter();

  const pushProductPage = (slug) => {
    const produce = data.filter((prod) => prod.slug === slug);
    router.push(`/${produce[0].category}/${produce[0].id}`);
  };

  return (
    <RecommendedProductCtx>
      <h2>You may also like</h2>
      <Flex className="row">
        {products.map((product, idx) => (
          <Col alignItems="center" gap="2rem" className="col" key={idx}>
            <ImageCard src={product.image.desktop} />
            <h5>{product.name}</h5>
            <Button
              onClick={() => pushProductPage(product.slug)}
              colorScheme="orange"
            >
              SEE PRODUCT
            </Button>
          </Col>
        ))}
      </Flex>
    </RecommendedProductCtx>
  );
};

RecommendedProduct.propTypes = {
  products: propTypes.array,
};

export default RecommendedProduct;
