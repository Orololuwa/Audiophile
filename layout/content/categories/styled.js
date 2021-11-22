import Flex from "components/flex";
import styled from "styled-components";

const CategoriesCtx = styled(Flex)`
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export default CategoriesCtx;
