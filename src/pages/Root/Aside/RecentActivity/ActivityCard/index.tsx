import React from 'react';

import { TaskAction } from '../../../../../types/task';

import { ActivityCardStyled, Content, Icon } from './styles';

interface IRecentActivityCardProps {
  id: number
  iconClass: string
  content: string
  action: TaskAction
}

export const ActivityCard: React.FC<IRecentActivityCardProps> = ({
  id,
  iconClass,
  content,
}) => {
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);

    const formattedDate = date.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    return formattedDate;
  }

  return (
    <ActivityCardStyled className='first-child'>
      <Icon>
        <i className={iconClass} />
      </Icon>

      <Content>
        <p>{content}</p>
        <span>{formatDate(id)}</span>
      </Content>
    </ActivityCardStyled>
  )
}