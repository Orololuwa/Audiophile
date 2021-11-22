import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

const GlobalStyle = createGlobalStyle`
${normalize()}

*,
*::after,
*::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        font-size: 75%;
    }
    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
        font-size: 80%;
    }    
}


body {
    transition: all 0.05s linear;
    width: 100%;
    line-height: 2.1rem;
    font-size: ${({ theme }) => theme.typeScale.bodyText4};
    font-family: ${({ theme }) => theme.primaryFont};
    color: ${({ theme }) => theme.colors.gray[900]};
    font-style: normal;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
  
h1 {
    line-height: 4rem;
    font-size: ${({ theme }) => theme.typeScale.header1};
}
h2 {
    line-height: 2.8rem;
    font-size: ${({ theme }) => theme.typeScale.header2};
}
h3 {font-size: ${({ theme }) => theme.typeScale.header3};}
h4 {font-size: ${({ theme }) => theme.typeScale.header4};}
h5 {font-size: ${({ theme }) => theme.typeScale.header5};}
h6 {font-size: ${({ theme }) => theme.typeScale.bodyText3};}
h1,h2,h3,h4,h5,h6{
    margin: 1rem 0;
}

p{
    font-weight: 100;
    font-size: ${({ theme }) => theme.typeScale.bodyText3};
    margin: .5rem 0;
}

a{
  &:link, &:visited, &:active{
      text-decoration: none;
      color: inherit;
  }  
}
`;

export default GlobalStyle;
