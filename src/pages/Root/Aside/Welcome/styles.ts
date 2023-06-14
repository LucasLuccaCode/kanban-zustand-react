import { styled } from 'styled-components';

export const WelcomeStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .8rem;
  padding: .5rem;
  border-radius: ${props => props.theme.borderRadius.medium};
  background: rgba(87, 104, 239, .1);
`

export const Message = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  strong {
    font-size: .8rem;
    color: rgba(var(--all-state-color), .7);
  }

  h2 {
    font-size: 1.1rem;
    color: ${props => props.theme.colors.bg.details};
  }
`