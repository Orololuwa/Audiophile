import styled from "styled-components";

const CartItemCtx = styled.div`
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

export default CartItemCtx;
