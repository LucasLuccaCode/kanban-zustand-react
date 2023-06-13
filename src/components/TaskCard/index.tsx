import React from 'react';
import { shallow } from 'zustand/shallow';

import { useTasksStore } from '../../store/useTasks';

import {
  Actions,
  Button,
  CreatedAt,
  Footer,
  TaskCardStyled,
} from './styles';

import { StateTypes } from '../../types/task';

interface ITaskCardProps {
  id: number
  title: string
  state: StateTypes
}

export const TaskCard: React.FC<ITaskCardProps> = ({ id, title }) => {
  const [setDraggedTask, removeTask] = useTasksStore(store =>
    [store.setDraggedTask, store.removeTask],
    shallow
  )

  const [fixedTasks, toggleFixedTask] = useTasksStore(store =>
    [store.fixedTasks, store.toggleFixedTask],
    shallow
  )

  const convertTimestampToDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString('pt-BR')
    return formattedDate
  }

  const handleDragStart = () => setDraggedTask(id)

  const isFixedTask = fixedTasks.includes(id)

  return (
    <TaskCardStyled
      className={isFixedTask ? 'fixed' : ''}
      draggable
      onDragStart={handleDragStart}
    >
      <h3>{title}</h3>

      <Footer>
        <CreatedAt>{convertTimestampToDate(id)}</CreatedAt>

        <Actions>
          <Button>
            <i className='bi bi-pencil-square' />
          </Button>

          <Button onClick={() => removeTask(id)}>
            <i className='bi bi-trash-fill' />
          </Button>

          <Button
            className={isFixedTask ? 'fixed' : ''}
            onClick={() => toggleFixedTask(id)}
          >
            <i className='bi bi-pin-fill' />
          </Button>

        </Actions>
      </Footer>
    </TaskCardStyled>
  )
}