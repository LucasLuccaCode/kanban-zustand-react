import { ColumnsStyled } from './styles'

import { Column } from '../Column'

export const Columns: React.FC = () => {
  return (
    <ColumnsStyled>
      <Column state='PLANNED' />
      <Column state='DOING' />
      <Column state='DONE' />
    </ColumnsStyled>
  )
}