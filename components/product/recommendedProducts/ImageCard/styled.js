import styled from "styled-components";

const ImageCardCtx = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.gray[100]};
  height: 20rem;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 12.5rem;
  }
`;

export default ImageCardCtx;
