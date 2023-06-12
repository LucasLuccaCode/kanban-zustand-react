import React, { ReactNode } from 'react'

import { IconButtonStyled } from './styles';

export type ButtonSize = 'NORMAL' | 'FULL'

interface IIconButtonProps {
  children: ReactNode;
  size?: ButtonSize;
  handleClick?(): void;
}

export const IconButton: React.FC<IIconButtonProps> = ({
  children,
  size = 'NORMAL',
  handleClick = () => { /* do nothing */ }
}) => {
  return (
    <IconButtonStyled className={size} onClick={handleClick}>
      {children}
    </IconButtonStyled>
  )
}