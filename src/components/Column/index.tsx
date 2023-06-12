import { ITask, StateTypes } from '../../types/task';

import { Amount, ColumnStyled, Title, TitleWrapper } from './styles';

import { DropZone } from './DropZone';

interface IColumnProps {
  state: StateTypes;
}

export const Column: React.FC<IColumnProps> = ({ state }) => {

  const tasks: ITask[] = []

  return (
    <ColumnStyled>
      <TitleWrapper>
        <Title>{state}</Title>
        <Amount>{tasks.length}</Amount>
      </TitleWrapper>

      <DropZone tasks={tasks} />
    </ColumnStyled>
  );
};
