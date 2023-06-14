import { styled } from 'styled-components';

export const AsideStyled = styled.div`
  grid-area: aside;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: ${props => props.theme.borderRadius.large};
  background: ${props => props.theme.colors.bg.secondary};
  overflow: hidden;
`


export const RecentActivityLabel = styled.h3`
  font-size: .8rem;
  font-weight: bold;
  color: #aaaab0;
`
