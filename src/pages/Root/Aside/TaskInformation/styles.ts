import { styled } from 'styled-components'

export const TaskInformationStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: .4rem;
`