import React, { CSSProperties } from 'react';

import { StateTypes } from '../../../../../types/task';

import { transformStateToPortuguese } from '../../../../../utils/transformStateToPortuguese';
import { useStateColor } from '../../../../../hooks/useStateColor';

import { InfoCardStyled } from './styles';

interface InfoCardProps {
  state: StateTypes,
  stateCount: number
}

export const InfoCard: React.FC<InfoCardProps> = ({ state, stateCount }) => {
  const stateColor = useStateColor(state)

  const styleWithStateColor = {
    '--state-color': stateColor
  } as CSSProperties

  return (
    <InfoCardStyled style={styleWithStateColor}>
      <p>{transformStateToPortuguese(state)}</p>
      <span>{stateCount}</span>
    </InfoCardStyled>
  )
}