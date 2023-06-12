import React from 'react'

import { ButtonStyled } from './styles'

export type ButtonSize = 'NORMAL' | 'FULL'

interface IButtonProps {
  text: string
  size?: ButtonSize
  handleClick?(): void
}

export const Button: React.FC<IButtonProps> = ({
  text,
  size = 'NORMAL',
  handleClick = () => { /* do nothing */ },
}) => {
  return (
    <ButtonStyled className={size} onClick={handleClick}>
      {text}
    </ButtonStyled>
  )
}
