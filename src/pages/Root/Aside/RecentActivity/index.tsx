import React from 'react';

import { RecentActivityStyled } from './styles';

import { useActivitiesStore } from '../../../../store/useActivities';

import { ActivityCard } from './ActivityCard';

export const RecentActivity: React.FC = () => {
  const activities = useActivitiesStore(store => store.activities)

  const taskActionIcons = {
    'ADD': 'bi bi-plus',
    'FIX': 'bi bi-pin',
    'DELETE': 'bi bi-trash',
    'UPDATE': 'bi bi-update'
  }

  return (
    <RecentActivityStyled>
      {activities?.map(activity => (
        <ActivityCard
          key={activity.id}
          id={activity.id}
          content={activity.content}
          iconClass={taskActionIcons[activity.action]}
          action={activity.action}
        />
      ))}
    </RecentActivityStyled>
  )
}