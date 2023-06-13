import { useTheme } from 'styled-components';
import { StateTypes } from '../types/task';

export const useStateColor = (state: StateTypes) => {
  const theme = useTheme()

  const states = {
    'PLANNED': theme?.colors.state.planned,
    'DOING': theme?.colors.state.doing,
    'DONE': theme?.colors.state.done,
  }

  const stateColor = states[state as keyof typeof states];

  return stateColor
}