import { styled } from 'styled-components';

export const RecentActivityStyled = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: .2rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    background: rgba(0, 0, 0, .2);
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.bg.details};
    border-radius: 50px;
  }
`;