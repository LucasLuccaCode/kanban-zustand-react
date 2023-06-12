import { create } from 'zustand'

interface IDialogStore {
  isOpen: boolean
  toggleDialog(): void
}

export const useDialogStore = create<IDialogStore>()((set) => ({
  isOpen: true,
  toggleDialog() {
    set((store) => ({
      isOpen: !store.isOpen,
    }))
  },
}))
