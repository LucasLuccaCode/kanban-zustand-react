import React, { useMemo } from 'react';

import { TaskInformationStyled } from './styles';

import { StateTypes } from '../../../../types/task';

import { useTasksStore } from '../../../../store/useTasks';

import { InfoCard } from './InfoCard';

type TaskInfo = {
  [k in StateTypes]?: number;
}

export const TaskInformation: React.FC = () => {
  const tasks = useTasksStore(store => store.tasks)

  const taskInfos: TaskInfo = useMemo(() => {
    return tasks.reduce((acc: TaskInfo, task) => {
      if (acc[task.state]) {
        acc[task.state] = (acc[task.state] || 0) + 1;
      } else {
        acc[task.state] = 1;
      }
      return acc;
    }, {});
  }, [tasks]);

  return (
    <TaskInformationStyled>
      <InfoCard state={'ALL'} stateCount={tasks?.length || 0} />
      <InfoCard state={'PLANNED'} stateCount={taskInfos['PLANNED'] || 0} />
      <InfoCard state={'DOING'} stateCount={taskInfos['DOING'] || 0} />
      <InfoCard state={'DONE'} stateCount={taskInfos['DONE'] || 0} />

    </TaskInformationStyled>
  )
}