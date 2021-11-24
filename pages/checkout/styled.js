import styled from "styled-components";
import Section from "components/section";

export const Hero = styled.div`
  background: ${({ theme }) => theme.colors.gray[900]};
  padding: 0 5rem 5.5rem 5rem;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 5rem 5.8rem 5rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 5rem 5rem 5rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 5rem 4.8rem 5rem;
  }
`;

export const CheckoutCtx = styled(Section)`
  background: ${({ theme }) => theme.colors.gray[100]};
`;

export const FormWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 3.5rem;

  .checkout-heading {
    font-weight: 400;
    text-transform: uppercase;
  }

  .checkout-subheading {
    font-weight: 400;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.orange[200]};
  }

  .cart {
    .header {
      h3 {
        text-transform: uppercase;
        font-weight: 300;
        margin-bottom: 3.5rem;
      }
    }

    .body {
      .totals {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 1rem 0;

        p,
        h6 {
          margin: 0;
          font-size: ${({ theme }) => theme.typeScale.bodyText4};
        }

        &-grand {
          color: ${({ theme }) => theme.colors.orange[200]};
        }
      }
    }

    .footer {
      button {
        width: 100%;
      }
    }
  }
`;

export default FormWrapper;
