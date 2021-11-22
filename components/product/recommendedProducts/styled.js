import Section from "components/section";
import styled from "styled-components";

const RecommendedProductCtx = styled(Section)`
  padding-top: 0;

  h2 {
    text-transform: uppercase;
    font-weight: 500;
    text-align: center;
  }

  .row {
    gap: 2rem;
    margin: 5rem 0;

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      flex-direction: column;
      gap: 5rem;
    }
  }

  .col {
    flex-basis: calc(33.3% - 0.67rem);

    h5 {
      text-transform: uppercase;
      font-weight: 500;
    }

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      flex-basis: 100%;
      width: 100%;
      gap: 1rem;
    }
  }
`;

export default RecommendedProductCtx;
