import styled from "styled-components";
import Section from "components/section";

const HeroCtx = styled(Section)`
  background: ${({ theme }) => theme.colors.gray[900]};
  color: ${({ theme }) => theme.colors.white};
  padding-top: 15rem;
  text-align: center;
  text-transform: uppercase;
`;

export default HeroCtx;
