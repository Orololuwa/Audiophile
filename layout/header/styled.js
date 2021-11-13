import styled from "styled-components";
import { IoMenuOutline } from "react-icons/io5";

export const Menu = styled(IoMenuOutline)`
  color: ${({ theme }) => theme.colors[theme.colors.primary][500]};
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const Header = styled.header`
  padding: 1rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors[theme.colors.primary][50]};
`;

export default Header;
