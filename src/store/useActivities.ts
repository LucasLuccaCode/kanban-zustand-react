import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { TaskAction } from '../types/task';

interface IActivity {
  id: number
  content: string
  action: TaskAction
}

interface IStates {
  activities: IActivity[]
}

interface IMutations {
  addActivity(activity: IActivity): void
}

export const useActivitiesStore = create<IStates & IMutations>()(
  persist(
    (set, get) => ({
      activities: [{
        id: Date.now() + 1,
        content: 'Adicionou uma tarefa',
        action: 'ADD'
      },
      {
        id: Date.now() + 2,
        content: 'Fixou uma tarefa',
        action: 'FIX'
      },
      {
        id: Date.now() + 3,
        content: 'Deletou uma tarefa',
        action: 'DELETE'
      }],
      addActivity(activity) {
        set({ activities: [...get().activities, activity] })
      },
    }), {
    name: 'mr-kanban-activity'
  }
  )
)