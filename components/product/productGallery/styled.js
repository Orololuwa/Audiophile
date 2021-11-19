import styled from "styled-components";
import Flex from "components/flex";

const ProductGalleryCtx = styled(Flex)`
  gap: 2rem;
  margin: 5rem 0 2.5rem 0;
  flex-wrap: wrap;

  .gallery-col-1 {
    flex-basis: calc(40% - 1rem);
    flex-grow: 1;
    gap: 2rem;

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      flex-basis: 100%;
      align-items: center;
    }
  }

  .gallery-col-2 {
    flex-basis: calc(60% - 1rem);
    flex-grow: 1;
    gap: 2rem;

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      flex-basis: 100%;
      align-items: center;
    }
  }

  .gallery-first,
  .gallery-second,
  .gallery-third {
    position: relative;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
  }

  .gallery-first,
  .gallery-second {
    height: 25rem;

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
      height: 20rem;
    }

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      width: 60%;
    }

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      width: 100%;
    }
  }

  .gallery-third {
    height: 52rem;

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
      height: 42rem;
    }

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      width: 60%;
    }

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      width: 100%;
    }
  }
`;

export default ProductGalleryCtx;
