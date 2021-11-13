import styled from "styled-components";

const CardCtx = styled.div`
  padding: 1rem;
  border-radius: 10px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const ChartCardCtx = styled.div`
  padding: 1rem;
  border-radius: 10px;
  border: 0.5px solid ${({ theme }) => theme.colors.gray[100]};
  background: ${({ theme }) => theme.colors.gray[50]}33;
`;

export default CardCtx;
