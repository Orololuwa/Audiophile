import styled from "styled-components";

export const Initials = styled.span`
  height: 25px;
  width: 25px;
  border-radius: 25px;
  background: ${({ theme }) => theme.colors[theme.colors.primary][500]};
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
