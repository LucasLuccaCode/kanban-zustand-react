import React from 'react'

import { AvatarStyled } from './styles'

interface IAvatarProps {
  avatarUrl?: string
  isAuthor?: boolean
  username?: string
  sizeRem: string
}

export const Avatar: React.FC<IAvatarProps> = ({
  avatarUrl,
  isAuthor,
  username,
  sizeRem,
}) => {
  return (
    <AvatarStyled $isAuthor={isAuthor} $avatarUrl={avatarUrl} $sizeRem={sizeRem}>
      {!avatarUrl && <span>{username?.substring(0, 1)}</span>}
    </AvatarStyled>
  )
}
