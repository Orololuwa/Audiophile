import { useState, forwardRef, useImperativeHandle } from "react";
import { InputWrapper, InputCtx, InputNumberCtx } from "./styled";
import propTypes from "prop-types";

const Input = (props) => {
  const { Prepend, Append, color, width, AppendPassword, placeholder } = props;
  return (
    <InputWrapper color={color} width={width} {...props}>
      {props.Prepend && <Prepend className="prepend" size={20} {...props} />}
      <InputCtx {...props} />
      {props.Append && <Append className="append" size={20} {...props} />}
      {props.AppendPassword && AppendPassword}
      {props.placeholder && <span className="placeholder">{placeholder}</span>}
    </InputWrapper>
  );
};

export const InputNumber = forwardRef((props, ref) => {
  const { defaultValue } = props;
  const [state, setState] = useState(defaultValue || 0);
  //0 will eventually change to a prop value;

  const increment = () => {
    setState((prev) => prev + 1);
  };

  const decrement = () => {
    setState((prev) => {
      if (prev === 0) {
        return prev;
      }
      return prev - 1;
    });
  };

  useImperativeHandle(ref, () => ({
    value: state,
  }));

  return (
    <InputNumberCtx colorScheme="gray" {...props}>
      <span className="icon-left" onClick={decrement}>
        -
      </span>
      <span>{state}</span>
      <span className="icon-right" onClick={increment}>
        +
      </span>
    </InputNumberCtx>
  );
});

InputNumber.propTypes = {
  defaultValue: propTypes.number,
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
