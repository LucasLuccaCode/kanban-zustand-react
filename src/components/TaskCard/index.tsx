import React from 'react';
import { shallow } from 'zustand/shallow';

import { useTasksStore } from '../../store/useTasks';

import {
  Actions,
  Button,
  CreatedAt,
  Footer,
  TaskCardStyled,
  Title
} from './styles';

interface ITaskCardProps {
  id: number
  title: string
}

export const TaskCard: React.FC<ITaskCardProps> = ({ id, title }) => {
  const [setDraggedTask, removeTask] = useTasksStore(store =>
    [store.setDraggedTask, store.removeTask],
    shallow
  )

  const convertTimestampToDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString('pt-BR')
    return formattedDate
  }

  const handleDragStart = () => setDraggedTask(id)

  return (
    <TaskCardStyled
      draggable
      onDragStart={handleDragStart}
    >
      <Title>{title}</Title>

      <Footer>
        <CreatedAt>{convertTimestampToDate(id)}</CreatedAt>

        <Actions>
          <Button>
            <i className='bi bi-pencil-square' />
          </Button>
          <Button onClick={() => removeTask(id)}>
            <i className='bi bi-trash-fill' />
          </Button>
          <Button>
            <i className='bi bi-pin-fill' />
          </Button>

        </Actions>
      </Footer>
    </TaskCardStyled>
  )
}