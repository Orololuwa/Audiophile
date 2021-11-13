import styled from "styled-components";

const HomeCtx = styled.div`
  .hero {
    background: url(/assets/home/desktop/image-hero.jpg) no-repeat right;
    background-size: cover;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: stretch;

    &-left {
      padding: 5rem 0;
      flex-basis: 50%;
      flex-grow: 1;

      h4 {
        letter-spacing: 1rem;
        font-weight: 200;
        color: ${({ theme }) => theme.colors.gray[50]}88;
      }

      h1 {
        font-size: 5rem;
        line-height: 5rem;

        @media only screen and (max-width: ${({ theme }) =>
            theme.breakpoints.sm}) {
          font-size: 3.5rem;
        }
      }

      p {
        width: 60%;

        @media only screen and (max-width: ${({ theme }) =>
            theme.breakpoints.md}) {
          width: 80%;
        }

        @media only screen and (max-width: ${({ theme }) =>
            theme.breakpoints.sm}) {
          width: 100%;
        }
      }

      @media only screen and (max-width: ${({ theme }) =>
          theme.breakpoints.md}) {
        text-align: center;
        align-items: center;
      }
    }

    &-right {
      flex-basis: 60%;
      flex-grow: 1;
      width: 100%;
      height: 100vh;
      background: ${({ theme }) => theme.colors.white};
      color: transparent;
      mix-blend-mode: darken;

      @media only screen and (max-width: ${({ theme }) =>
          theme.breakpoints.md}) {
        display: none;
      }
    }
  }
`;
export default HomeCtx;
