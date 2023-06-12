import { create } from 'zustand';
import { ITask, StateTypes } from '../types/task';

interface IState {
  tasks: ITask[]
  draggedTask: number | null
}

interface IMutations {
  setDraggedTask(taskId: number): void
  moveTask(state: StateTypes): void
}

export const useTasksStore = create<IState & IMutations>()(
  (set, get) => ({
    tasks: [{
      id: Date.now(),
      title: 'Lorem ipsum dolor...',
      state: 'PLANED'
    }],
    draggedTask: null,
    setDraggedTask(taskId) {
      set({ draggedTask: taskId })
    },
    moveTask(state) {
      const tasks = get().tasks.slice()
      const taskId = get().draggedTask
      const taskIndex = tasks.findIndex(task => task.id === taskId)
      tasks[taskIndex].state = state

      set({ tasks })
    },
  })
)