import ProductGalleryCtx from "./styled";
import propTypes from "prop-types";
import Col from "components/col";
import Image from "next/image";

const ProductGallery = (props) => {
  const { srcFirst, srcSecond, srcThird, name } = props;
  return (
    <ProductGalleryCtx justifyContent="center">
      <Col className="gallery-col-1">
        <div className="gallery-first">
          <Image
            src={srcFirst}
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
            alt={name}
          />
        </div>
        <div className="gallery-second">
          <Image
            src={srcSecond}
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
            alt={name}
          />
        </div>
      </Col>
      <Col className="gallery-col-2">
        <div className="gallery-third">
          <Image
            src={srcThird}
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
            alt={name}
          />
        </div>
      </Col>
    </ProductGalleryCtx>
  );
};

ProductGallery.propTypes = {
  srcFirst: propTypes.string,
  srcSecond: propTypes.string,
  srcThird: propTypes.string,
  name: propTypes.string,
};

export default ProductGallery;
