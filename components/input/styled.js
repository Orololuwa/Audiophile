import styled from "styled-components";
import Button from "components/Button";

export const InputWrapper = styled.div`
  position: relative;
  width: ${({ width }) => width};

  .prepend,
  .append {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme, color, mode }) =>
      mode === "light"
        ? theme.colors[color][200]
        : mode === "dark"
        ? theme.colors[color][700]
        : null};
  }

  .prepend {
    left: 5px;
  }

  .append {
    right: 5px;
  }

  .placeholder {
    position: absolute;
    top: 7.5px;
    left: 15px;
    color: ${({ theme, color, mode }) =>
      mode === "light"
        ? theme.colors[color][100]
        : mode === "dark"
        ? theme.colors[color][600]
        : null};
    font-size: ${({ theme }) => theme.typeScale.bodyText5};
    line-height: ${({ theme }) => theme.typeScale.bodyText5};
    display: ${({ type }) => (type === "search" ? "none" : "inline-block")};
  }
`;

export const InputCtx = styled.input`
  border: 1px solid
    ${({ theme, color, mode }) =>
      mode === "light"
        ? theme.colors[color][200]
        : mode === "dark"
        ? theme.colors[color][700]
        : null};
  padding: ${({ placeholder, type }) =>
      placeholder && type !== "search" ? "20px" : "10px"}
    ${({ Append }) => (Append ? "30px" : "15px")} 10px
    ${({ Prepend }) => (Prepend ? "30px" : "15px")};
  border-radius: 5px;
  color: ${({ theme, color, mode }) =>
    mode === "light"
      ? theme.colors[color][200]
      : mode === "dark"
      ? theme.colors[color][700]
      : null};
  font-size: ${({ theme }) => theme.typeScale.bodyText4};
  width: 100%;
  background: ${({ theme, variant }) =>
    variant === "filled"
      ? theme.colors.white
      : (variant = "outline" ? "transparent" : null)};
  ${({ error, theme }) =>
    error && `box-shadow: 0 0 .2rem 0.1rem ${theme.colors.red[400]}`};

  &::placeholder {
    opacity: ${({ type }) => (type == "search" ? "1" : "0")};
    color: ${({ theme, color, mode }) =>
      mode === "light"
        ? theme.colors[color][100]
        : mode === "dark"
        ? theme.colors[color][700]
        : null};
  }

  &:focus,
  &:focus-visible {
    border: 1px solid
      ${({ theme, color, mode }) =>
        mode === "light"
          ? theme.colors[color][200]
          : mode === "dark"
          ? theme.colors[color][700]
          : null};
    outline: none;
    box-shadow: 0 0 0 0.1rem
      ${({ theme, color, mode, error }) =>
        error
          ? theme.colors.red[400]
          : mode === "light"
          ? theme.colors[color][200]
          : mode === "dark"
          ? theme.colors[color][700]
          : null};
  }
`;

export const InputNumberCtx = styled(Button)`
  background: ${({ theme }) => theme.colors.gray[100]};
  border-color: ${({ theme }) => theme.colors.gray[100]};
  position: relative;
  cursor: default;
  padding: 10px 30px;
  color: ${({ theme }) => theme.colors.gray[900]};

  &:hover {
    background: ${({ theme }) => theme.colors.gray[50]};
    border-color: ${({ theme }) => theme.colors.gray[50]};
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  .icon-left,
  .icon-right {
    position: absolute;
    top: 0;
    //transform: translateY(-50%);
    padding: 2.5px 5px;
    cursor: pointer;
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .icon-left {
    left: 5px;
  }

  .icon-right {
    right: 2.5px;
  }
`;
