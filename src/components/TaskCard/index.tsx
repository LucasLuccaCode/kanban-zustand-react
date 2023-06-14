import React from 'react';
import { shallow } from 'zustand/shallow';

import {
  Actions,
  Button,
  CreatedAt,
  Footer,
  TaskCardStyled,
} from './styles';

import { StateTypes } from '../../types/task';

import { useTasksStore } from '../../store/useTasks';
import { useActivitiesStore } from '../../store/useActivities';
import { IActivity } from '../../types/activity';

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

  const addActivity = useActivitiesStore(store => store.addActivity)

  const convertTimestampToDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString('pt-BR')
    return formattedDate
  }

  const isFixedTask = fixedTasks.includes(id)

  const handleDragStart = () => setDraggedTask(id)

  const handleTaskRemove = () => {
    removeTask(id)

    const activity: IActivity = {
      id: Date.now(),
      content: 'Deletou uma tarefa',
      action: 'DELETE'
    }

    addActivity(activity)
  }

  const handleTaskFix = () => {
    toggleFixedTask(id)

    const activity: IActivity = {
      id: Date.now(),
      content: `${isFixedTask ? 'Desfixou' : 'Fixou'} uma tarefa`,
      action: 'FIX'
    }

    addActivity(activity)
  }

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

          <Button onClick={handleTaskRemove}>
            <i className='bi bi-trash-fill' />
          </Button>

          <Button
            className={isFixedTask ? 'fixed' : ''}
            onClick={handleTaskFix}
          >
            <i className='bi bi-pin-fill' />
          </Button>

        </Actions>
      </Footer>
    </TaskCardStyled>
  )
}