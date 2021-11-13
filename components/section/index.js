import styled from "styled-components";
import theme from "theme";

const Section = styled.section`
  padding: 7.5rem;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 5rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 2.5rem;
  }
`;

export default Section;
