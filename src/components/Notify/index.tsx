import React from 'react';

import { NotifyStyled } from './styles';

export const Notify: React.FC = () => {
  return (
    <NotifyStyled>
      <i className='bi bi-bell' />
    </NotifyStyled>
  )
}