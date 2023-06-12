import { styled } from 'styled-components'

export const HeaderStyled = styled.header`
  grid-area: header;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  i {
    color: ${(props) => props.theme.colors.text.title};
  }
`

export const Menu = styled.button`
  padding: .3rem .4rem;
  border-radius: .3rem;

  &:hover {
    background-color: ${props => props.theme.colors.bg.buttonHover};
  }
`

export const ManageAccount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;

  span {
    color: ${(props) => props.theme.colors.text.placeholder};
  }
`

export const Account = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 100px;
  padding: 0.2rem .5rem;
  background: rgba(87, 104, 239, .1);
  border: 2px solid transparent;
  transition: all .3s ease;
  
  &:hover {
    border: 2px solid rgba(87, 104, 239, .5);
    background: transparent;
  }
  
  i, strong {
    color: ${(props) => props.theme.colors.bg.details};
  }

  strong {
    font-size: 0.8rem;
    /* color: ${(props) => props.theme.colors.text.title}; */
  }
`