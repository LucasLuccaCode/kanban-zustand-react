import React from 'react';
import { shallow } from 'zustand/shallow';

import { MainStyled, Header } from './styles';

import { useDialogStore } from '../../../store/useDialog';

import { IconButton } from '../../../components/IconButton';
import { Columns } from '../../../components/Columns';
import { Dialog } from '../../../components/Dialog';
import { TaskForm } from '../../../components/TaskForm';

export const Main: React.FC = () => {
  const [taskFormIsOpen, toggleTaskFormIsOpen] = useDialogStore(store =>
    [store.taskFormIsOpen, store.toggleTaskFormIsOpen],
    shallow
  )

  return (
    <MainStyled>
      <Header>
        <h1>Tarefas </h1>

        <IconButton handleClick={toggleTaskFormIsOpen}>
          <i className='bi bi-plus' />
          <span>Adicionar tarefa </span>
        </IconButton>
      </Header>

      <Columns />

      <Dialog
        title='Adicione uma tarefa'
        isOpen={taskFormIsOpen}
        setIsOpen={toggleTaskFormIsOpen}
      >
        <TaskForm />
      </Dialog>
    </MainStyled>
  )
}