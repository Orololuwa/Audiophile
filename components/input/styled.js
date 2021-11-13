import styled from "styled-components";

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
