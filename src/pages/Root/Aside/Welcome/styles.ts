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
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  strong {
    font-size: .8rem;
    color: rgba(87, 104, 239, var(--title-opacity));
  }

  h3 {
    font-size: 1rem;
    color: ${props => props.theme.colors.bg.details}
  }
`