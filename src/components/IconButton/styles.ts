import styled from 'styled-components'

import { ButtonCss } from '../Button/styles'

export const IconButtonStyled = styled.button`
  ${() => ButtonCss}

  display: flex;
  justify-content: center;
  align-items: center;
  gap: .3rem;
  
  width: 100%;
  border: 0 !important;
  height: max-content;
  white-space: nowrap;
  font-weight: bold;

  &:hover {
    i {
      color: ${(props) => props.theme.colors.bg.details};
    }
  }

  i {
    font-size: .9rem;
    /* color: ${(props) => props.theme.colors.text.title}; */
  }
`