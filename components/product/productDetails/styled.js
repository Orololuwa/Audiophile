import styled from "styled-components";
import Flex from "components/flex";

const ProductDetailCtx = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(50% - 1.75rem), 1fr));
  justify-items: start;
  align-items: center;
  grid-gap: 3.5rem;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 100%;
    justify-items: center;
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

    h3 {
      margin: 0.5rem 0;
      text-transform: uppercase;
      width: 100%;
      font-weight: 500;
      letter-spacing: 2.5px;
      font-size: ${({ theme }) => theme.typeScale.header5};
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

    .input {
      margin-right: 2rem;
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

    .item-listing {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      h4 {
        letter-spacing: 2.5px;
      }
      p {
        width: 100%;
        text-align: left;
      }
    }

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      text-align: center;
      align-items: center;
    }
  }

  .align-self-start {
    align-self: flex-start;
    align-items: flex-start;

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      width: 60%;
    }

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      width: 100%;
    }
  }
`;

export default ProductDetailCtx;
