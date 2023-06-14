import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { IUser } from '../types/user';

interface IStore {
  user: IUser
}

interface IMutations {
  updateUser({ name, avatarUrl }: Omit<IUser, 'id'>): void
}

export const useUserStore = create<IStore & IMutations>()(
  persist(
    ((set, get) => ({
      user: {
        id: 1,
        name: 'John Doe',
        avatarUrl: ''
      },
      updateUser({ name, avatarUrl }) {
        set({
          user: { ...get().user, name, avatarUrl }
        })
      },
    })), {
    name: 'mr-kanban-user'
  }
  )
)