import React from 'react';

import { Message, WelcomeStyled } from './styles';

import { Avatar } from '../../../../components/Avatar';

export const Welcome: React.FC = () => {
  return (
    <WelcomeStyled>
      <Message>
        <strong>Bem vindo</strong>
        <h2>John Doe</h2>
      </Message>
      <Avatar isAuthor={true} username='John Doe' sizeRem='2.3rem' />
    </WelcomeStyled>
  )
}