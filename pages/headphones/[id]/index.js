import Section from "components/section";
import getAllProductsId from "lib/products";
import data from "data.json";
import ProductDetailsCtx from "./styled";
import ProductDetail from "components/product/productDetails";
import ProductGallery from "components/product/productGallery";

const ProductDetails = ({ productData }) => {
  let { name, description, id, image, price, features, includes, gallery } =
    productData;
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
        <ProductGallery
          srcFirst={gallery.first.desktop}
          srcSecond={gallery.second.desktop}
          srcThird={gallery.third.desktop}
          name={name}
        />
      </Section>
    </ProductDetailsCtx>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const paths = getAllProductsId("headphones");
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
