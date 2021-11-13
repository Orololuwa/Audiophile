import propTypes from "prop-types";
import FlexContext from "components/flex/styled";

const Row = (props) => {
  return <FlexContext {...props}>{props.children}</FlexContext>;
};

Row.defaultProps = {
  direction: "row",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "0",
  wrap: "wrap",
};

Row.propTypes = {
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

export default Row;
