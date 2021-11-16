import styled from "styled-components";
import Section from "components/section";
import Flex from "components/flex";

const FooterCtx = styled(Section)`
  background: ${({ theme }) => theme.colors.gray[900]};

  color: ${({ theme }) => theme.colors.white};
`;

export const Flex_ = styled(Flex)`
  .copy,
  .socials {
    flex-basis: 50%;
  }

  .socials {
    &-icon {
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        color: ${({ theme }) => theme.colors.orange[300]};
        transform: scale(1.1);
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;

    nav {
      align-items: center;
    }

    .copy,
    .socials {
      text-align: center;
    }
  }
`;

export default FooterCtx;
