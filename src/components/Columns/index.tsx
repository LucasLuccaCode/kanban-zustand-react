import { ColumnsStyled } from './styles'

import { Column } from '../Column'

export const Columns: React.FC = () => {
  return (
    <ColumnsStyled>
      <Column state='PLANED' />
      <Column state='PROGRESS' />
      <Column state='COMPLETED' />
    </ColumnsStyled>
  )
}