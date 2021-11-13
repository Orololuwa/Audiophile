import propTypes from "prop-types";
import BadgeCtx from "./styled";
import theme from "theme";

const Badge = (props) => <BadgeCtx {...props}>{props.children}</BadgeCtx>;

Badge.defaultProps = {
  colorScheme: theme.colors.primary,
};

Badge.propTypes = {
  colorScheme: propTypes.string,
};

export default Badge;
