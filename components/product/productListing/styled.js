import styled from "styled-components";
import Flex from "components/flex";

const ProductListingCtx = styled(Flex)`
  margin: 1rem 0;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 2.5rem;
  }

  .product-image,
  .product-content {
    flex-basis: calc(50% - 1.75rem);
  }

  .product-content {
    h4,
    h5,
    h6 {
      letter-spacing: 0.5rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.orange[300]};
      font-size: ${({ theme }) => theme.typeScale.bodyText4};
      margin: 0;
    }

    h1 {
      margin: 0.5rem 0;
      text-transform: uppercase;
      width: 65%;
      font-size: ${({ theme }) => theme.typeScale.header2};
      line-height: ${({ theme }) => theme.typeScale.header2};
      font-weight: 500;
      letter-spacing: 5px;

      @media only screen and (max-width: ${({ theme }) =>
          theme.breakpoints.lg}) {
        width: 100%;
      }

      @media only screen and (max-width: ${({ theme }) =>
          theme.breakpoints.md}) {
        width: 65%;
      }

      @media only screen and (max-width: ${({ theme }) =>
          theme.breakpoints.sm}) {
        width: 100%;
      }
    }

    button {
      margin: 2.5rem 0;
    }

    p {
      width: 90%;
      font-size: ${({ theme }) => theme.typeScale.bodyText4};

      @media only screen and (max-width: ${({ theme }) =>
          theme.breakpoints.md}) {
        width: 60%;
        text-align: justify;
      }

      @media only screen and (max-width: ${({ theme }) =>
          theme.breakpoints.sm}) {
        width: 100%;
        text-align: justify;
      }
    }

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      text-align: center;
      align-items: center;
    }
  }
`;

export default ProductListingCtx;
