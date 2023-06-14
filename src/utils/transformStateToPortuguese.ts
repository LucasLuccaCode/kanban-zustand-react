import { StateTypes } from '../types/task'

export const transformStateToPortuguese = (state: StateTypes) => {
  const stateToPortuguese = {
    'ALL': 'Total',
    'PLANNED': 'Planejadas',
    'DOING': 'Fazendo',
    'DONE': 'Concluídas'
  }

  return stateToPortuguese[state as keyof typeof stateToPortuguese]
}