import { StateTypes } from '../types/task'

type StateToPortuguese = {
  [k in StateTypes]: string
}

export const transformStateToPortuguese = (state: StateTypes) => {
  const stateToPortuguese: StateToPortuguese = {
    'ALL': 'Total',
    'PLANNED': 'Planejadas',
    'DOING': 'Fazendo',
    'DONE': 'Concluídas'
  }

  return stateToPortuguese[state]
}