import styled from "styled-components";

const CategoryCardCtx = styled.div`
  text-align: center;
  padding: 1rem 0;
  flex-grow: 1;
  background: ${({ theme }) => theme.colors.gray[100]};
  text-transform: uppercase;
  padding-top: 7.5rem;
  border-radius: 10px;
  position: relative;
  margin: 2.5rem 0;

  .category-image {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: calc(100% - 9rem);
    left: 50%;
    transform: translateX(-50%);

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      bottom: calc(100% - 9.5rem);
    }

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      bottom: calc(100% - 10rem);
    }

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      bottom: calc(100% - 6.3rem);
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-top: 3.5rem;
  }
`;

export default CategoryCardCtx;
