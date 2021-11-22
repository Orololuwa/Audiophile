import styled from "styled-components";

const ButtonCtx = styled.button`
  background: ${({ colorScheme, variant, theme }) =>
    variant === "outline"
      ? "transparent"
      : variant === "filled"
      ? theme.colors[colorScheme][400]
      : variant === "ghost"
      ? "transparent"
      : theme.colors[colorScheme][500]};
  color: ${({ colorScheme, variant, theme, loading }) =>
    loading && variant === "filled"
      ? theme.colors[colorScheme][400]
      : !loading && variant === "filled"
      ? theme.colors.white
      : (loading && variant === "outline") || (loading && variant === "ghost")
      ? theme.colors.white
      : (!loading && variant === "outline") || (!loading && variant === "ghost")
      ? theme.colors[colorScheme][900]
      : theme.colors.white};
  border: 1px solid
    ${({ colorScheme, variant, theme }) =>
      variant === "filled"
        ? theme.colors[colorScheme][400]
        : variant === "outline"
        ? theme.colors[colorScheme][900]
        : variant === "ghost"
        ? "transparent"
        : theme.colors[colorScheme][500]};
  padding: 10px 15px;
  width: max-content;
  font-size: ${({ theme }) => theme.typeScale.bodyText4};
  cursor: pointer;
  transition: all 0.2s ease-in;
  position: relative;

  .loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.white};
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  &:hover,
  &:active {
    background: ${({ colorScheme, variant, theme }) =>
      variant === "outline"
        ? theme.colors[colorScheme][900]
        : variant === "filled"
        ? theme.colors[colorScheme][300]
        : variant === "ghost"
        ? "transparent"
        : theme.colors[colorScheme][500]};
    color: ${({ colorScheme, variant, theme, loading }) =>
      variant === "outline"
        ? theme.colors.white
        : variant === "filled"
        ? theme.colors.white
        : theme.colors.orange[300]};
    border: 1px solid
      ${({ colorScheme, variant, theme }) =>
        variant === "filled"
          ? theme.colors[colorScheme][300]
          : variant === "outline"
          ? theme.colors[colorScheme][900]
          : variant === "ghost"
          ? "transparent"
          : theme.colors[colorScheme][500]};
    .loader {
      color: ${({ theme, colorScheme }) => theme.colors[colorScheme][500]}};
    }
  }

  ${({ disabled }) =>
    disabled === true &&
    `
    cursor: not-allowed;
    background: ${({ colorScheme, variant, theme }) =>
      variant === "outline"
        ? "transparent"
        : variant === "filled"
        ? theme.colors[colorScheme][100]
        : variant === "ghost"
        ? "transparent"
        : theme.colors[colorScheme][100]};
    color: ${({ colorScheme, variant, theme, loading }) =>
      loading && variant === "filled"
        ? theme.colors[colorScheme][300]
        : !loading && variant === "filled"
        ? theme.colors.white
        : (loading && variant === "outline") || (loading && variant === "ghost")
        ? theme.colors.white
        : (!loading && variant === "outline") ||
          (!loading && variant === "ghost")
        ? theme.colors[colorScheme][300]
        : theme.colors.white};
    border: 1px solid
      ${({ colorScheme, variant, theme }) =>
        variant === "outline" || variant === "filled"
          ? theme.colors[colorScheme][300]
          : variant === "ghost"
          ? theme.colors[colorScheme][50]
          : theme.colors[colorScheme][300]};
  `}
`;

export default ButtonCtx;
