import styled from 'styled-components'
import { ButtonCss } from '../Button/styles'

export const UserFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  width: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`

export const Label = styled.label`
  color: #fff;
  font-size: 0.8rem;
`

export const Input = styled.input`
  border: none;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.text.title};
  width: 100%;
  border-radius: .3rem;
  padding: .5rem;
  background: ${props => props.theme.colors.bg.primary};
`

export const Button = styled.button`
  ${ButtonCss}

  width: 50%;
`
