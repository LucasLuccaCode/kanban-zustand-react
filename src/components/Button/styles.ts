import styled, { css } from 'styled-components'

export const ButtonCss = css`
  cursor: pointer !important;
  font-size: 0.7rem;
  font-weight: bold;
  padding: 0.3rem 0.5rem;
  border-radius: ${(props) => props.theme.borderRadius.large};
  color: ${props => props.theme.colors.bg.details};
  background: rgba(87, 104, 239, .2);
  transition: background 0.2s ease !important;

  &:hover {
    background: transparent;
    color: ${(props) => props.theme.colors.bg.details};
  }

  &:focus {
    outline-color: ${(props) => props.theme.colors.bg.details};
  }

  &.NORMAL {
    width: max-content;
  }

  &.FULL {
    flex: 1;
  }
`

export const ButtonStyled = styled.button`
  ${() => ButtonCss}
`
