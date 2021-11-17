import styled from "styled-components";
import Section from "components/section";

const HeroCtx = styled(Section)`
  background: ${({ theme }) => theme.colors.gray[900]};
  color: ${({ theme }) => theme.colors.white};
  padding-top: 15rem;
  text-align: center;
  text-transform: uppercase;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-top: 12.5rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 10rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-top: 7.5rem;
  }
`;

export default HeroCtx;
