import { create } from 'zustand'

interface IStates {
  taskFormIsOpen: boolean
  userFormIsOpen: boolean
}

interface IMutations {
  toggleTaskFormIsOpen(): void
  toggleUserFormIsOpen(): void
}

export const useDialogStore = create<IStates & IMutations>()(
  (set) => ({
    taskFormIsOpen: false,
    userFormIsOpen: false,

    toggleTaskFormIsOpen() {
      set((store) => ({
        taskFormIsOpen: !store.taskFormIsOpen,
      }))
    },
    toggleUserFormIsOpen() {
      set((store) => ({
        userFormIsOpen: !store.userFormIsOpen,
      }))
    },
  })
)
