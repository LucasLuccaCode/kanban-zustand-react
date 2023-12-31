import React, { useState, FormEvent } from 'react'

import { ITask, StateTypes } from '../../types/task'
import { IActivity } from '../../types/activity'

import {
  Actions,
  TaskFormStyled,
  Select,
  Status,
  TextArea,
  Wrapper,
} from './styles'

import { useTasksStore } from '../../store/useTasks'
import { useDialogStore } from '../../store/useDialog'
import { useActivitiesStore } from '../../store/useActivities'
import { useUserStore } from '../../store/useUser'

import { Avatar } from '../Avatar'
import { Button } from '../Button'

export const TaskForm: React.FC = () => {
  const [title, setTitle] = useState('')
  const [state, setState] = useState<StateTypes>('PLANNED')

  const addTask = useTasksStore((store) => store.addTask)
  const toggleTaskFormIsOpen = useDialogStore((store) => store.toggleTaskFormIsOpen)
  const addActivity = useActivitiesStore((store) => store.addActivity)
  const user = useUserStore((store) => store.user)

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!title) return

    const task: ITask = {
      id: Date.now(),
      title,
      state,
    }

    addTask(task)
    toggleTaskFormIsOpen()

    const activity: IActivity = {
      id: Date.now(),
      content: 'Adicionou uma tarefa',
      action: 'ADD'
    }

    addActivity(activity)
  }

  return (
    <TaskFormStyled onSubmit={handleFormSubmit}>
      <Avatar
        isAuthor={true}
        username={user.name}
        avatarUrl={user.avatarUrl}
        sizeRem='2.2rem'
      />

      <Wrapper>
        <Select
          name='state'
          value={state}
          onChange={(e) => setState(e.target.value as StateTypes)}
        >
          <option value='PLANNED'>Planejada</option>
          <option value='DOING'>Fazendo</option>
          <option value='DONE'>Completa</option>
        </Select>
        <TextArea
          name='title'
          rows={3}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Escreva sobre a tarefa aqui...'
          maxLength={400}
          value={title}
          autoFocus
        />
        <Actions>
          <Status>{title.length} / 2000</Status>
          <Button disabled={!title} text='CRIAR' size='FULL' />
        </Actions>
      </Wrapper>
    </TaskFormStyled>
  )
}
