import React from 'react';
import { shallow } from 'zustand/shallow';

import { useDialogStore } from '../../store/useDialog';

import { Columns } from '../../components/Columns';
import { IconButton } from '../../components/IconButton';
import { Header } from './styles';
import { Dialog } from '../../components/Dialog';
import { TaskForm } from '../../components/TaskForm';

const Tasks: React.FC = () => {
  const [taskFormIsOpen, toggleTaskFormIsOpen] = useDialogStore(store =>
    [store.taskFormIsOpen, store.toggleTaskFormIsOpen],
    shallow
  )

  return (
    <>
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
    </>
  )
}

export default Tasks