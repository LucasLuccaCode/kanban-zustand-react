import { styled } from 'styled-components';

export const ColumnsStyled = styled.ul`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: 100%;
  gap: 1rem;
  overflow: hidden;
`