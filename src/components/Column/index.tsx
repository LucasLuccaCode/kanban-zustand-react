import { DragEvent, useState } from 'react';
import { shallow } from 'zustand/shallow';

import { StateTypes } from '../../types/task';

import {
  Amount,
  ColumnStyled,
  DropZone,
  Title,
  TitleWrapper
} from './styles';

import { useTasksStore } from '../../store/useTasks';

import { TaskCard } from '../TaskCard';

interface IColumnProps {
  state: StateTypes;
}

export const Column: React.FC<IColumnProps> = ({ state }) => {
  const [drop, setDrop] = useState(false)

  const filter = useTasksStore(store => store.filter)
  const [tasks, moveTask] = useTasksStore(store =>
    [store.tasks.filter(task =>
      task.state === state && task.title.toLowerCase().includes(filter.toLowerCase())),
    store.moveTask
    ],
    shallow
  )

  const handleDragOver = (event: DragEvent<HTMLLIElement>) => {
    event.preventDefault()
    setDrop(true)
  }

  const handleDragLeave = () => {
    setDrop(false)
  }

  const handleDragEnter = () => {
    // setDrop(true)
  }

  const handleDrop = () => {
    moveTask(state)
    setDrop(false)
  }

  return (
    <ColumnStyled
      className={drop ? 'drop' : ''}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <TitleWrapper>
        <Title>{state}</Title>
        <Amount>{tasks.length}</Amount>
      </TitleWrapper>

      <DropZone>
        {tasks?.map((task) => (
          <TaskCard key={task.id} id={task.id} title={task.title} />
        ))}
      </DropZone>
    </ColumnStyled>
  );
};
