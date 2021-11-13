import { InputWrapper, InputCtx } from "./styled";
import propTypes from "prop-types";

const Input = (props) => {
  const { Prepend, Append, color, width, AppendPassword, placeholder } = props;
  return (
    <InputWrapper color={color} width={width} {...props}>
      {props.Prepend && <Prepend className="prepend" size={20} />}
      <InputCtx {...props} />
      {props.Append && <Append className="append" size={20} />}
      {props.AppendPassword && AppendPassword}
      {props.placeholder && <span className="placeholder">{placeholder}</span>}
    </InputWrapper>
  );
};

Input.defaultProps = {
  color: "gray",
  width: "25rem",
  variant: "filled",
  mode: "light",
};

Input.propTypes = {
  Prepend: propTypes.func,
  Append: propTypes.func,
  AppendPassword: propTypes.func,
  placeholder: propTypes.string,
  color: propTypes.string,
  variant: propTypes.oneOf(["filled", "outline"]),
  mode: propTypes.oneOf(["light", "dark"]),
  type: "string",
  error: propTypes.bool,
};

export default Input;
