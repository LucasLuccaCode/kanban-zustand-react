import React from 'react'

import { ButtonStyled } from './styles'

export type ButtonSize = 'NORMAL' | 'FULL'

interface IButtonProps {
  text: string
  size?: ButtonSize
  disabled?: boolean
  handleClick?(): void
}

export const Button: React.FC<IButtonProps> = ({
  text,
  size = 'NORMAL',
  disabled = false,
  handleClick = () => { /* do nothing */ },
}) => {
  return (
    <ButtonStyled
      className={size}
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </ButtonStyled>
  )
}
