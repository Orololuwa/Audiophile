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

export const InputNumber = (props, ref) => {
  const { value, onIncrement, onDecrement } = props;
  //0 will eventually change to a prop value;

  const increment = () => {
    onIncrement();
  };

  const decrement = () => {
    onDecrement();
  };

  return (
    <InputNumberCtx colorScheme="gray" {...props}>
      <span className="icon-left" onClick={decrement}>
        -
      </span>
      <span>{value}</span>
      <span className="icon-right" onClick={increment}>
        +
      </span>
    </InputNumberCtx>
  );
};

InputNumber.defaultProps = {
  defaultValue: 0,
};

InputNumber.propTypes = {
  defaultValue: propTypes.number,
  value: propTypes.number,
  onIncrement: propTypes.func,
  onDecrement: propTypes.func,
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
