import propTypes from "prop-types";
import FlexContext from "components/flex/styled";

const Col = (props) => {
  return <FlexContext {...props}>{props.children}</FlexContext>;
};

Col.defaultProps = {
  direction: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "0",
};

Col.propTypes = {
  direction: propTypes.string,
  alignItems: propTypes.string,
  justifyContent: propTypes.string,
  gap: propTypes.string,
  wrap: propTypes.bool,
  flexBasis: propTypes.oneOfType([
    propTypes.string,
    propTypes.arrayOf(propTypes.string),
  ]),
  grow: propTypes.string,
};

export default Col;
