import { styled } from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.text.title};
  }
`