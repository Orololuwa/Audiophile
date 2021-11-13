import styled from "styled-components";

const TableWrapper = styled.div`
  border-radius: 10px;
  border: 0.5px solid ${({ theme }) => theme.colors[theme.colors.primary][100]};
  overflow: hidden;
  position: relative;
  ${({ width }) => width && `width: ${width};`}

  .rdt_TableBody {
    padding: 0 1rem !important;
  }
`;

export const PaginationInfoCtx = styled.div`
  padding-right: 10px;
  font-weight: 600;
`;

export default TableWrapper;
