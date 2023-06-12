import { styled } from 'styled-components';

export const NotifyStyled = styled.button`
  padding: .3rem .4rem;
  border-radius: .3rem;

  &:hover {
    background-color: ${props => props.theme.colors.bg.buttonHover};
  }
`