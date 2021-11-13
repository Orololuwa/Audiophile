import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const BackdropCtx = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 50000;
  background: ${({ theme }) => theme.colors.gray[900]}77;
  animation: ${fadeIn} 0.2s;
`;

export default BackdropCtx;
