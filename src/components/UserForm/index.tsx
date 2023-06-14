import React, { useState, FormEvent, useEffect } from 'react'
import { shallow } from 'zustand/shallow'

import { IActivity } from '../../types/activity'

import { Input, Label, UserFormStyled, Wrapper, Button } from './styles'

import { useDialogStore } from '../../store/useDialog'
import { useActivitiesStore } from '../../store/useActivities'
import { useUserStore } from '../../store/useUser'

import { Avatar } from '../Avatar'

export const UserForm: React.FC = () => {
  const [user, updateUser] = useUserStore((store) =>
    [store.user, store.updateUser],
    shallow
  )

  const [name, setName] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')

  useEffect(() => {
    setName(user.name)
    setAvatarUrl(user.avatarUrl)
  }, [user])

  const toggleUserFormIsOpen = useDialogStore((store) => store.toggleUserFormIsOpen)

  const addActivity = useActivitiesStore((store) => store.addActivity)


  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!name) return

    updateUser({ name, avatarUrl })
    toggleUserFormIsOpen()

    const activity: IActivity = {
      id: Date.now(),
      content: 'Atualizou o perfil',
      action: 'PROFILE'
    }

    addActivity(activity)
  }

  return (
    <UserFormStyled onSubmit={handleFormSubmit}>
      <Avatar
        isAuthor={true}
        username={user.name}
        avatarUrl={avatarUrl}
        sizeRem='4rem'
      />

      <Wrapper>
        <Label htmlFor='avatar_url'>Url de avatar:</Label>
        <Input
          type='text'
          name='avatar_url'
          id='avatar_url'
          value={avatarUrl}
          onChange={(e) => setAvatarUrl(e.target.value)}
        />
      </Wrapper>

      <Wrapper>
        <Label htmlFor='name'>Nome:</Label>
        <Input
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Wrapper>

      <Button>Atualizar</Button>
    </UserFormStyled>
  )
}
