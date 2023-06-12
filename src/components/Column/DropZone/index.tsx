import React from 'react';

import { DropZoneStyled } from './styles';

import { ITask } from '../../../types/task';

import { TaskCard } from '../../TaskCard';

interface IDropZoneProps {
  tasks: ITask[]
}

export const DropZone: React.FC<IDropZoneProps> = ({ tasks }) => {
  return (
    <DropZoneStyled>
      {tasks?.map((task) => (
        <TaskCard key={task.id} id={task.id} title={task.title} state={task.state} />
      ))}
    </DropZoneStyled>
  )
}