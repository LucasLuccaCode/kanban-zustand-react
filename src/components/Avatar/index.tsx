import React from 'react'

import { AvatarStyled } from './styles'
import { getNameInitials } from '../../utils/getNameInitials'

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

  const circleSize = Number(sizeRem.split('rem')[0])
  const nameSize = Math.max(Number((circleSize - 1.4).toFixed(1)), 0.5)

  return (
    <AvatarStyled
      $isAuthor={isAuthor}
      $avatarUrl={avatarUrl}
      $circleSize={circleSize}
      $nameSize={nameSize}
    >
      {!avatarUrl && <span>{getNameInitials(username)}</span>}
    </AvatarStyled>
  )
}
