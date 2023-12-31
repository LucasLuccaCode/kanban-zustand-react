import React from 'react';

import { AsideStyled } from './styles';

import { Welcome } from './Welcome';
import { TaskInformation } from './TaskInformation';
import { RecentActivity } from './RecentActivity';

export const Aside: React.FC = () => {
  return (
    <AsideStyled>
      <Welcome />

      <TaskInformation />

      <RecentActivity />
    </AsideStyled>
  )
}