import { styled } from 'styled-components';
import { Form } from 'react-router-dom'

export const SearchFormStyled = styled(Form)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 50%;
  padding: 0 0.3rem;
  border-radius: 100px;
  border: 1.5px solid transparent;
  background: ${(props) => props.theme.colors.bg.secondary};
  transition: all .3s ease;
  overflow: hidden;

  &:focus-within {
    border-color: ${(props) => props.theme.colors.borderFocus};
  }
`

export const Input = styled.input`
  all: unset;
  flex: 1;
  height: 1.9rem;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.text.title};
  background: transparent;

  &::placeholder {
    color: ${(props) => props.theme.colors.text.placeholder};
  }
`

export const Button = styled.button`
  all: unset;
`