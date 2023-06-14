import React from 'react';

import { Message, WelcomeStyled } from './styles';

import { useUserStore } from '../../../../store/useUser';

import { Avatar } from '../../../../components/Avatar';

export const Welcome: React.FC = () => {
  const user = useUserStore(store => store.user)

  return (
    <WelcomeStyled>
      <Message>
        <strong>Bem vindo(a)</strong>
        <h2>{user.name}</h2>
      </Message>

      <Avatar
        isAuthor={true}
        username={user.name}
        avatarUrl={user.avatarUrl}
        sizeRem='2.3rem'
      />
    </WelcomeStyled>
  )
}