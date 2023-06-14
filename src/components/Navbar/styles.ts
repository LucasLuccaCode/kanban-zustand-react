import { styled } from 'styled-components';

export const NavbarStyled = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
  border-radius: 50px;
  background: ${props => props.theme.colors.bg.secondary};

  a {
    display: flex;
    justify-content: center;
    position: relative;
    text-decoration: none;
    font-weight: bold;
    font-size: .8rem;
    color: ${props => props.theme.colors.text.title};
    padding: .5rem 0;
    border-bottom: 2px solid transparent;
  }

  a::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0;
    height: 2px;
    border-bottom: 2px solid rgba(var(--all-state-color), .9);
    transition: width .2s ease;
  }
  
  a.active::before {
    width: 100%;
  }
`