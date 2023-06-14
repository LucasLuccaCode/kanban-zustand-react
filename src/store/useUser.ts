import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { IUser } from '../types/user';

interface IUserStore {
  user: IUser
}

export const useUserStore = create<IUserStore>()(
  persist(
    ((set, get) => ({
      user: {
        id: 1,
        name: 'John Doe',
        avatarUrl: ''
      }
    })), {
    name: 'mr-kanban-user'
  }
  )
)