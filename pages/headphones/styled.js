import styled from "styled-components";

const HeadphonesCtx = styled.div`
  .hero {
    background: ${({ theme }) => theme.colors.gray[900]};
    color: ${({ theme }) => theme.colors.white};
    padding-top: 15rem;
    text-align: center;
    text-transform: uppercase;
  }
`;

export default HeadphonesCtx;
