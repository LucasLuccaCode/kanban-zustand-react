import React from 'react';

import { MainStyled } from './styles';

import { Outlet } from 'react-router-dom';

export const Main: React.FC = () => {
  return (
    <MainStyled>
      <Outlet />
    </MainStyled>
  )
}