import React from 'react';

import { AsideStyled, RecentActivityLabel } from './styles';

import { Welcome } from './Welcome';
import { TaskInformation } from './TaskInformation';
import { RecentActivity } from './RecentActivity';

export const Aside: React.FC = () => {
  return (
    <AsideStyled>
      <Welcome />

      <TaskInformation />

      <RecentActivityLabel>Atividades recentes</RecentActivityLabel>

      <RecentActivity />
    </AsideStyled>
  )
}