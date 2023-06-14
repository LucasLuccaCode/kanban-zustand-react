import { styled } from 'styled-components';

export const RootStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  display: grid;
  grid-template-columns: 1fr minmax(0, 24%);
  grid-template-rows: max-content 1fr;
  grid-template-areas:
    'header header'
    'main aside';
  gap: 1rem;

  width: calc(100vw - (1rem * 2));
  height: calc(100vh - (1rem * 2));
  border-radius: ${props => props.theme.borderRadius.medium};
`