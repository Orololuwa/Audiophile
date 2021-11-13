import Card from "components/card";
import styled from "styled-components";

export const DashboardWidgetCtx = styled(Card)`
  border: 0.5px solid
    ${({ theme, color, variant }) =>
      variant === "filled" ? theme.colors[color][300] : "transparent"};
  color: ${({ theme, color }) => theme.colors[color][500]};
  background: ${({ theme, color }) => theme.colors[color][50]};
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  p,
  h3 {
    color: ${({ theme }) => theme.colors.gray[700]};
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 85% !important;
  }
`;
