import { styled } from 'styled-components'

export const MainStyled = styled.main`
  grid-area: main;
  display: grid;
  grid-template-rows: max-content 1fr;
  gap: 1rem;
  padding: 0.8rem;
  border-radius: ${(props) => props.theme.borderRadius.large};
  background: ${(props) => props.theme.colors.bg.secondary};
  overflow: hidden;
`
