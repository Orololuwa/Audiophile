import styled, { keyframes } from "styled-components";

const slideInLeft = keyframes`
    0% {
        width: 0;
    }
    100%{
        width: 15%;
    }
`;

const NavContext = styled.nav`
  display: ${({ screen }) =>
    screen === "desktop" ? "flex" : screen === "mobile" ? "none" : null};
  flex-direction: ${({ screen }) => (screen === "desktop" ? "row" : "column")};
  padding: ${({ screen }) => screen === "mobile" && ".5rem 0"};

  .menu-item {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    gap: 10px;
    transition: all 0.2s ease-out;
    position: relative;
    ${({ screen, theme }) =>
      screen === "mobile" &&
      `width: fit-content;margin: .8rem .25rem;font-size: ${theme.typeScale.bodyText3};`}
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: 3.5px;

    &:hover {
      color: ${({ theme }) => theme.colors.orange[300]};

      &::after {
        content: "";
        display: block;
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 15%;
        height: 2.5px;
        border-radius: 5px;
        background: ${({ theme }) => theme.colors.orange[300]};
        animation: ${slideInLeft} 0.5s;
      }
    }
  }
  .active {
    color: ${({ theme }) => theme.colors.orange[300]};

    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 15%;
      height: 2.5px;
      border-radius: 5px;
      background: ${({ theme }) => theme.colors.orange[300]};
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: ${({ screen }) =>
      screen === "desktop" ? "none" : screen === "mobile" ? "flex" : null};
  }
`;

export default NavContext;
