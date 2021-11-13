import styled from "styled-components";
import CardCustom from "components/Card";

const Card = styled(CardCustom)`
  background: ${({ theme }) => theme.colors.white};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 50010;
`;

export default Card;
