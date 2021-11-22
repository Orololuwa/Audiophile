import ImageCardCtx from "./styled";
import Image from "next/image";
import propTypes from "prop-types";

const ImageCard = ({ src }) => (
  <ImageCardCtx>
    <Image src={src} layout="fill" objectFit="contain" />
  </ImageCardCtx>
);

ImageCard.propTypes = {
  src: propTypes.string,
};

export default ImageCard;
