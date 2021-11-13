import styled, { keyframes } from "styled-components";

const load3 = keyframes`
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
    }
`;

const LoadingCtx = styled.div`
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  background: ${({ theme, color }) =>
    color === "white" ? theme.colors.white : theme.colors[color][500]};
  background: -moz-linear-gradient(
    left,
    ${({ theme, color }) =>
        color === "white" ? theme.colors.white : theme.colors[color][500]}
      10%,
    rgba(54, 178, 108, 0) 42%
  );
  background: -webkit-linear-gradient(
    left,
    ${({ theme, color }) =>
        color === "white" ? theme.colors.white : theme.colors[color][500]}
      10%,
    rgba(54, 178, 108, 0) 42%
  );
  background: -o-linear-gradient(
    left,
    ${({ theme, color }) =>
        color === "white" ? theme.colors.white : theme.colors[color][500]}
      10%,
    rgba(54, 178, 108, 0) 42%
  );
  background: -ms-linear-gradient(
    left,
    ${({ theme, color }) =>
        color === "white" ? theme.colors.white : theme.colors[color][500]}
      10%,
    rgba(54, 178, 108, 0) 42%
  );
  background: linear-gradient(
    to right,
    ${({ theme, color }) =>
        color === "white" ? theme.colors.white : theme.colors[color][500]}
      10%,
    rgba(54, 178, 108, 0) 42%
  );
  position: relative;
  -webkit-animation: ${load3} 1.4s infinite linear;
  animation: ${load3} 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  &::before {
    width: 50%;
    height: 50%;
    background: ${({ theme, color }) =>
      color === "white" ? theme.colors.white : theme.colors[color][500]};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }
  &::after {
    background: ${({ theme, color, colorScheme }) =>
      color === "white"
        ? theme.colors[colorScheme][500]
        : theme.colors.white} !important;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

const load7 = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
`;

export const Loading2Ctx = styled.div`
  color: ${({ theme, color }) =>
    color === "white" ? theme.colors.white : theme.colors[color][500]};
  font-size: 10px;
  position: absolute;
  top: -${({ size }) => size};
  left: 50%;
  text-indent: -9999em;
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;

  &,
  &:before,
  &:after {
    border-radius: 50%;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: ${load7} 1.8s infinite ease-in-out;
    animation: ${load7} 1.8s infinite ease-in-out;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
  }
  &:before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  &:after {
    left: 1.5em;
  }
`;

export default LoadingCtx;
