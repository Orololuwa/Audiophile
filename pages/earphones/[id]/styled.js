import styled from "styled-components";

const ProductDetailsCtx = styled.div`
  .hero {
    background: ${({ theme }) => theme.colors.gray[900]};
    padding: 0 5rem 5.5rem 5rem;

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      padding: 0 5rem 5.8rem 5rem;
    }

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: 0 5rem 5rem 5rem;
    }

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding: 0 5rem 4.8rem 5rem;
    }
  }

  h1 {
    color: ${({ theme }) => theme.colors.gray[900]};
  }
`;

export default ProductDetailsCtx;
