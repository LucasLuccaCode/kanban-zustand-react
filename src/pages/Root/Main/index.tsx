import React from 'react';

import { MainStyled, Header } from './styles';

import { useDialogStore } from '../../../store/useDialog';

import { IconButton } from '../../../components/IconButton';
import { Columns } from '../../../components/Columns';

export const Main: React.FC = () => {
  const toggleDialog = useDialogStore(store => store.toggleDialog)

  return (
    <MainStyled>
      <Header>
        <h1>Tarefas </h1>

        <IconButton handleClick={toggleDialog}>
          <i className='bi bi-plus' />
          <span>Adicionar tarefa </span>
        </IconButton>
      </Header>

      <Columns />
    </MainStyled>
  )
}