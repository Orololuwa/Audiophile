import styled from "styled-components";

const BadgeCtx = styled.span`
  background: ${({ colorScheme, theme }) => theme.colors[colorScheme][100]}66;
  color: ${({ colorScheme, theme }) => theme.colors[colorScheme][300]};
  border: 1px solid
    ${({ colorScheme, theme }) => theme.colors[colorScheme][300]};
  padding: 10px 15px;
  border-radius: 7.5px;
  width: max-content;
  font-size: ${({ theme }) => theme.typeScale.bodyText4};
  font-weight: 600;
`;

export default BadgeCtx;
