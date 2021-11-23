import styled, { keyframes } from "styled-components";

const bump = keyframes`
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1.15);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
`;

const CartButtonCtx = styled.div`
  position: relative;

  .badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(25%, -25%);
    background: ${({ theme }) => theme.colors.orange[400]};
    padding: 2.5px;
    width: 12.5px;
    height: 12.5px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.white};
    font-size: 7.5px;
  }

  .bump {
    animation: ${bump} 300ms ease-out;
  }
`;

export default CartButtonCtx;
