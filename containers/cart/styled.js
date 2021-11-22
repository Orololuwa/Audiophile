import styled from "styled-components";

const CartCtx = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 25rem;
  padding: 2rem;
  border-radius: 7.5px;
  position: fixed;
  top: 7.5rem;
  right: 7.5rem;
  z-index: 5005000;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      display: inline-block;
      margin: 0;
      margin-right: 2px;
      font-size: ${({ theme }) => theme.typeScale.bodyText4};
    }

    .clearcart {
      margin: 0;
      cursor: pointer;
      line-height: 1.5;
      transition: all 0.5s;
      border-bottom: 0.5px solid transparent;

      &:hover {
        border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray[900]}66;
      }
    }
  }

  .body {
    .totals {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 2rem;

      p,
      h6 {
        margin: 0;
        font-size: ${({ theme }) => theme.typeScale.bodyText4};
      }
    }
  }

  .footer {
    button {
      width: 100%;
      margin-top: 2.5rem;
    }
  }
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;

  .product-info {
    display: inline-flex;
    align-items: center;
    gap: 10px;

    span {
      display: inline-flex;
      flex-direction: column;
      p,
      h5 {
        margin: 0;
      }
      h5 {
        font-weight: 400;
        font-size: ${({ theme }) => theme.typeScale.bodyText4};
        text-transform: uppercase;
      }
      p {
        font-size: ${({ theme }) => theme.typeScale.bodyText4};
      }
    }
  }

  .image {
    border-radius: 7.5px;
  }
`;

export default CartCtx;
