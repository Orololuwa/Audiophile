import styled, { keyframes } from "styled-components";

const slideInLeft = keyframes`
    0% {
        width: 0;
    }
    100%{
        width: 25rem;
    }
`;

const DrawerCtx = styled.div`
  position: absolute;
  ${({ placement }) => (placement === "bottom" ? "bottom: 0;" : "top: 0;")};
  ${({ placement }) => (placement === "right" ? "right: 0" : "left: 0;")};
  width: ${({ placement }) =>
    placement === "left" || placement === "right" ? "25rem" : "100%"};
  height: ${({ placement }) =>
    placement === "bottom" || placement === "top" ? "25rem" : "100vh"};
  background: ${({ theme, color }) =>
    color ? theme.colors[color][900] : theme.colors.white};
  animation: ${slideInLeft} 0.2s;
  padding: 1rem;
`;

export default DrawerCtx;
