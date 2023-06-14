import { styled } from 'styled-components';

export const AsideStyled = styled.aside`
  grid-area: aside;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: ${props => props.theme.borderRadius.large};
  background: ${props => props.theme.colors.bg.secondary};
  overflow: hidden;
`
