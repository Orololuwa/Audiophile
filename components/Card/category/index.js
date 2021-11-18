import CategoryCardCtx from "./styled";
import propTypes from "prop-types";
import Button from "components/Button";
import { IoIosArrowForward } from "react-icons/io";
import theme from "theme";
import Image from "next/image";

const CategoryCard = (props) => (
  <CategoryCardCtx {...props}>
    <div className="category-image">
      <Image
        layout="fill"
        objectFit="contain"
        src={`/assets/shared/desktop/image-category-thumbnail-${props.category}.png`}
        alt={props.category}
      />
    </div>
    <div>{props.category}</div>
    <Button variant="ghost">
      <span
        style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}
        onClick={props.clicked}
      >
        <span style={{ fontSize: theme.typeScale.bodyText5 }}>SHOP</span>
        <IoIosArrowForward size={12} color={theme.colors.orange[300]} />
      </span>
    </Button>
  </CategoryCardCtx>
);

CategoryCard.propTypes = {
  category: propTypes.string,
  clicked: propTypes.func,
};

export default CategoryCard;
