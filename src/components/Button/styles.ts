import styled, { css } from 'styled-components'

export const ButtonCss = css`
  cursor: pointer !important;
  font-size: 0.7rem;
  text-align: center;
  font-weight: bold;
  padding: 0.2rem 0.5rem;
  border-radius: 100px;
  color: ${props => props.theme.colors.bg.details};
  background: rgba(87, 104, 239, .2);
  transition: background 0.2s ease !important;

  & {
    border: 2px solid transparent !important;
  }

  &:disabled {
    pointer-events: none;
    opacity: .6;
  }

  &:hover {
    background: transparent;
    border-color: rgba(87, 104, 239, .4) !important;
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
