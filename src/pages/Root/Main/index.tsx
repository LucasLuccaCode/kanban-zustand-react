import React from 'react';

import { MainStyled, Header } from './styles';

import { IconButton } from '../../../components/IconButton';
import { Columns } from '../../../components/Columns';

export const Main: React.FC = () => {
  return (
    <MainStyled>
      <Header>
        <h1>Tarefas </h1>

        <IconButton>
          <i className='bi bi-plus' />
          <span>Adicionar tarefa </span>
        </IconButton>
      </Header>

      <Columns />
    </MainStyled>
  )
}