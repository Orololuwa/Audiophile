import Loading, { Loading2 } from "components/Loading";
import propTypes from "prop-types";
import theme from "theme";
import ButtonCtx from "./styled";

const Button = (props) => {
  const { disabled } = props;
  //console.log(props.disabled);
  return (
    <ButtonCtx {...props} disabled={disabled && disabled === true}>
      {props.children}
      {props.loading && (
        <span className="loader">
          <Loading2
            size="10px"
            color={props.variant === "filled" ? "white" : props.colorScheme}
            colorScheme={props.colorScheme}
          />
        </span>
      )}
    </ButtonCtx>
  );
};

Button.defaultProps = {
  variant: "filled",
  colorScheme: theme.colors.primary,
  loading: false,
};

Button.propTypes = {
  variant: propTypes.oneOf(["outline", "filled", "ghost"]),
  colorScheme: propTypes.string,
  loading: propTypes.bool,
  onClick: propTypes.func,
  disabled: propTypes.bool,
};

export default Button;
