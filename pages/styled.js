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

export const ZX9 = styled.div`
  flex-basis: 100%;
  flex-grow: 1;
  background: ${({ theme }) => theme.colors.orange[300]}
    url(/assets/home/desktop/pattern-circles.svg) no-repeat left bottom;
  background-size: contain;
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  height: 75vh;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;

  .zx9-image,
  .zx9-textcontent {
    flex-basis: 50%;
    flex-grow: 1;

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      flex-basis: 100%;
    }
  }

  .zx9-textcontent {
    padding: 0 2.5rem;
    h1 {
      font-size: 5rem;
      line-height: 5rem;

      @media only screen and (max-width: ${({ theme }) =>
          theme.breakpoints.sm}) {
        font-size: 3.5rem;
      }
    }

    button {
      margin-top: 2.5rem;
      background: ${({ theme }) => theme.colors.gray[900]};
      border-color: ${({ theme }) => theme.colors.gray[900]};

      &:hover,
      &:active {
        background: ${({ theme }) => theme.colors.gray[800]};
        border-color: ${({ theme }) => theme.colors.gray[800]};
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

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      text-align: center;
      align-items: center;
    }
  }

  .zx9-image {
    width: 100%;
    height: 80%;
    position: relative;
    transform: translateY(calc(75vh - 110%));

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      height: 50rem;
      width: 20rem;
      transform: translateY(0);
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 90vh;
    flex-direction: column;
    background-position: top center;
  }
`;

export const ZX7 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: url(/assets/home/desktop/image-speaker-zx7.jpg) no-repeat center;
  background-size: cover;
  border-radius: 10px;
  flex-basis: 100%;
  flex-grow: 1;
  padding: 5rem 0;

  .zx7-textcontent {
    padding: 3.5rem;

    h4,
    button {
      margin: 1.5rem 0;
    }
  }
`;

export const YX1 = styled.div`
  display: flex;
  align-items: stretch;
  flex-basis: 100%;
  flex-grow: 1;
  gap: 2rem;

  .yk1-image,
  .yk1-textcontent {
    flex-basis: calc(50% - 1rem);
    border-radius: 10px;
  }

  .yk1-image {
    background: url(/assets/home/desktop/image-earphones-yx1.jpg) no-repeat
      center;
    background-size: cover;
    padding: 12.5rem 7.5rem;

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding: 7.5rem 5rem;
    }
  }

  .yk1-textcontent {
    padding: 3.5rem;
    background: ${({ theme }) => theme.colors.gray[100]};

    h4,
    button {
      margin: 1.5rem 0;
    }

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding: 1.5rem;
    }
  }
`;

export default HomeCtx;
