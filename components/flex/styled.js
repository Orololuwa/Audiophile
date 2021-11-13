import styled from "styled-components";

const FlexContext = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  gap: ${({ gap }) => gap};
  ${({ width }) => width && `width: ${width};`}
  ${({ wrap }) => (wrap ? "flex-wrap: wrap;" : null)}
  ${({ grow }) => grow && `flex-grow: ${grow};`}
  ${({ flexBasis, theme }) => {
    if (!Array.isArray(flexBasis)) {
      return `flex-basis: ${flexBasis};`;
    } else if (flexBasis.length === 1) {
      return `flex-basis: ${flexBasis[0]};`;
    } else if (flexBasis.length === 2) {
      return `
        flex-basis: ${flexBasis[1]};
        @media only screen and (max-width: ${theme.breakpoints.md}){
          flex-basis: ${flexBasis[1]};
        }
        @media only screen and (max-width: ${theme.breakpoints.sm}){
          flex-basis: ${flexBasis[0]};
        }
      `;
    } else if (flexBasis.length === 3) {
      return `
      flex-basis: ${flexBasis[2]};
      @media only screen and (max-width: ${theme.breakpoints.lg}){
        flex-basis: ${flexBasis[2]};
      }
      @media only screen and (max-width: ${theme.breakpoints.md}){
        flex-basis: ${flexBasis[1]};
      }
      @media only screen and (max-width: ${theme.breakpoints.sm}){
        flex-basis: ${flexBasis[0]};
      }
      `;
    } else if (flexBasis.length === 4) {
      return `
      flex-basis: ${flexBasis[3]};
      @media only screen and (max-width: ${theme.breakpoints.xl}){
        flex-basis: ${flexBasis[3]};
      }
      @media only screen and (max-width: ${theme.breakpoints.lg}){
        flex-basis: ${flexBasis[2]};
      }
      @media only screen and (max-width: ${theme.breakpoints.md}){
        flex-basis: ${flexBasis[1]};
      }
      @media only screen and (max-width: ${theme.breakpoints.sm}){
        flex-basis: ${flexBasis[0]};
      }
      `;
    } else if (flexBasis.length === 5) {
      return `
        flex-basis: ${flexBasis[4]};
        @media only screen and (max-width: ${theme.breakpoints["2xl"]}){
          flex-basis: ${flexBasis[4]};
        }
        @media only screen and (max-width: ${theme.breakpoints.xl}){
          flex-basis: ${flexBasis[3]};
        }
        @media only screen and (max-width: ${theme.breakpoints.lg}){
          flex-basis: ${flexBasis[2]};
        }
        @media only screen and (max-width: ${theme.breakpoints.md}){
          flex-basis: ${flexBasis[1]};
        }
        @media only screen and (max-width: ${theme.breakpoints.sm}){
          flex-basis: ${flexBasis[0]};
        }
      `;
    } else {
      return "flex-basis: 0;";
    }
  }}
`;

export default FlexContext;
