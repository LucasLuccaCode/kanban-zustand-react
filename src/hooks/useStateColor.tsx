import { useTheme } from 'styled-components';
import { StateTypes } from '../types/task';

type AllowedStateColors = {
  [k in StateTypes]: string | undefined
}

export const useStateColor = (state: StateTypes) => {
  const theme = useTheme()

  const allowedStateColors: AllowedStateColors = {
    'PLANNED': theme?.colors.state.planned,
    'DOING': theme?.colors.state.doing,
    'DONE': theme?.colors.state.done,
    'ALL': theme?.colors.state.all
  }

  const stateColor = allowedStateColors[state];

  return stateColor
}