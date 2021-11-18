import Section from "components/section";
import getAllProductsId from "lib/products";
import data from "data.json";
import ProductDetailsCtx from "./styled";
import ProductDetail from "components/product/productDetails";

const ProductDetails = ({ productData }) => {
  let { name, description, id, image, price, features, includes } = productData;
  features = productData.features.split("\n");
  return (
    <ProductDetailsCtx>
      <Section className="hero" />
      <Section>
        <ProductDetail
          name={name}
          description={description}
          image={image}
          id={id}
          price={price}
          features={features}
          includes={includes}
        />
      </Section>
    </ProductDetailsCtx>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const paths = getAllProductsId();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const productData = data.reduce((arr, prdct) => {
    if (prdct.id == params.id) {
      arr = { ...prdct };
    }
    return arr;
  }, {});

  return {
    props: {
      productData,
    },
  };
};
