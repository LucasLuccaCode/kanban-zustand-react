import React from 'react';
import { shallow } from 'zustand/shallow';

import { TaskAction } from '../../../../types/task';

import {
  RecentActivityStyled,
  ActivityLabel,
  Button,
  EmptyActivities,
  Activities,
} from './styles';

import { useActivitiesStore } from '../../../../store/useActivities';

import { ActivityCard } from './ActivityCard';

type TaskActionIcons = {
  [k in TaskAction]: string
}

export const RecentActivity: React.FC = () => {
  const [activities, resetActivities] = useActivitiesStore(store =>
    [
      store.activities.sort((a, b) => b.id - a.id),
      store.resetActivities
    ],
    shallow
  )

  const taskActionIcons: TaskActionIcons = {
    'ADD': 'bi bi-list',
    'FIX': 'bi bi-pin-fill',
    'DELETE': 'bi bi-trash-fill',
    'PROFILE': 'bi bi-person-circle'
  }

  return (
    <RecentActivityStyled>

      <ActivityLabel>
        <h3>Atividades recentes</h3>
        <Button onClick={resetActivities}>
          <span>{activities.length}</span>
          <i className='bi bi-trash-fill' />
        </Button>
      </ActivityLabel>

      {!activities.length && (
        <EmptyActivities>
          Nenhuma atividade recente ainda...
        </EmptyActivities>
      )}

      <Activities>
        {activities?.map(activity => (
          <ActivityCard
            key={activity.id}
            id={activity.id}
            content={activity.content}
            iconClass={taskActionIcons[activity.action]}
            action={activity.action}
          />
        ))}
      </Activities>
    </RecentActivityStyled>
  )
}