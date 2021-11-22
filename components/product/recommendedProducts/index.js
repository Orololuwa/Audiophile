import RecommendedProductCtx from "./styled";
import ImageCard from "./ImageCard";
import Flex from "components/flex";
import Col from "components/col";
import Button from "components/Button";
import propTypes from "prop-types";
import { useRouter } from "next/router";

const RecommendedProduct = (props) => {
  const { products } = props;
  const router = useRouter();

  const pushProductPage = (category, id) => {
    router.push(`/${category}/${id}`);
  };
  return (
    <RecommendedProductCtx>
      <h2>You may also like</h2>
      <Flex className="row">
        {products.map((product) => (
          <Col alignItems="center" gap="2rem" className="col" key={product.id}>
            <ImageCard src={product.image.desktop} />
            <h5>{product.name}</h5>
            <Button
              onClick={() => pushProductPage(product.category, product.id)}
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
