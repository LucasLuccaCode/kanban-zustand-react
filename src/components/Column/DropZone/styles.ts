import { styled } from 'styled-components';

export const DropZoneStyled = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: .5rem;
  overflow-y: auto;
  

  &::-webkit-scrollbar {
    width: .2rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.bg.details};
    border-radius: 50px;
  }
`