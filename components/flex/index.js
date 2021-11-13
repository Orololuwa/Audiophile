import propTypes from "prop-types";
import FlexContext from "./styled";

const Flex = (props) => {
  return <FlexContext {...props}>{props.children}</FlexContext>;
};

Flex.defaultProps = {
  direction: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
};

Flex.propTypes = {
  direction: propTypes.string,
  alignItems: propTypes.string,
  justifyContent: propTypes.string,
  gap: propTypes.string,
  wrap: propTypes.bool,
  flexBasis: propTypes.oneOfType([
    propTypes.string,
    propTypes.arrayOf(propTypes.string),
  ]),
};

export default Flex;
