import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { IActivity } from '../types/activity';

interface IStates {
  activities: IActivity[]
}

interface IMutations {
  addActivity(activity: IActivity): void
  resetActivities(): void
}

export const useActivitiesStore = create<IStates & IMutations>()(
  persist(
    (set, get) => ({
      activities: [],
      addActivity(activity) {
        set({ activities: [...get().activities, activity] })
      },
      resetActivities() {
        set({ activities: [] })
      },
    }), {
    name: 'mr-kanban-activity'
  }
  )
)