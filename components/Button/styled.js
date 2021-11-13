import styled from "styled-components";

const ButtonCtx = styled.button`
  background: ${({ colorScheme, variant, theme }) =>
    variant === "outline"
      ? "transparent"
      : variant === "filled"
      ? theme.colors[colorScheme][500]
      : variant === "ghost"
      ? theme.colors[colorScheme][50]
      : theme.colors[colorScheme][500]};
  color: ${({ colorScheme, variant, theme, loading }) =>
    loading && variant === "filled"
      ? theme.colors[colorScheme][500]
      : !loading && variant === "filled"
      ? theme.colors.white
      : (loading && variant === "outline") || (loading && variant === "ghost")
      ? theme.colors.white
      : (!loading && variant === "outline") || (!loading && variant === "ghost")
      ? theme.colors[colorScheme][500]
      : theme.colors.white};
  border: 1px solid
    ${({ colorScheme, variant, theme }) =>
      variant === "outline" || variant === "filled"
        ? theme.colors[colorScheme][500]
        : variant === "ghost"
        ? theme.colors[colorScheme][50]
        : theme.colors[colorScheme][500]};
  padding: 10px 15px;
  border-radius: 7.5px;
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
        ? theme.colors[colorScheme][500]
        : variant === "filled"
        ? "transparent"
        : variant === "ghost"
        ? theme.colors[colorScheme][50]
        : theme.colors[colorScheme][500]};
    color: ${({ colorScheme, variant, theme, loading }) =>
      variant === "outline"
        ? theme.colors.white
        : variant === "filled"
        ? theme.colors[colorScheme][500]
        : theme.colors[colorScheme][500]};
    .loader {
      color: ${({ theme, colorScheme }) => theme.colors[colorScheme][500]}};
    }
  }
  &:focus {
    box-shadow: 0 0 0 0.25rem
      ${({ theme, colorScheme }) => `${theme.colors[colorScheme][500]}66`};
  }

  &:disabled{
    cursor: not-allowed;
    background: ${({ colorScheme, variant, theme }) =>
      variant === "outline"
        ? "transparent"
        : variant === "filled"
        ? theme.colors[colorScheme][300]
        : variant === "ghost"
        ? theme.colors[colorScheme][50]
        : theme.colors[colorScheme][300]};
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
  }
`;

export default ButtonCtx;
