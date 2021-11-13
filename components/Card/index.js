import CardCtx, { ChartCardCtx } from "./styled";
import propTypes from "prop-types";

const Card = (props) => {
  return <CardCtx {...props}>{props.children}</CardCtx>;
};

Card.propTypes = {
  width: propTypes.string,
  height: propTypes.string,
};

export const ChartCard = (props) => {
  return <ChartCardCtx {...props}>{props.children}</ChartCardCtx>;
};

export default Card;
