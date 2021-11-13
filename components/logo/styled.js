import styled from "styled-components";

const LogoContext = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  .logo {
    display: block;
    padding: 0 2.5px;
    &-subheader {
      line-height: 6px;
      font-size: 12px;
      text-align: right;
      padding-right: 17px;
    }

    &-header,
    &-subheader {
      color: ${({ theme }) => theme.colors[theme.colors.primary][500]};
    }

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      display: ${({ mobile }) => (mobile ? "none" : "block")};
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: ${({ mobile }) => (mobile ? "none" : "block")};
  }
`;

export default LogoContext;
