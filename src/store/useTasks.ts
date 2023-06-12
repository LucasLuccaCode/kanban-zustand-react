import { create } from 'zustand';
import { ITask, StateTypes } from '../types/task';

interface IState {
  tasks: ITask[]
  draggedTask: number | null
}

interface IMutations {
  addTask(task: ITask): void
  removeTask(taskId: number): void
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
    addTask(task) {
      set(store => ({
        tasks: [...store.tasks, task]
      }))
    },
    removeTask(taskId) {
      const tasks = get().tasks.slice()
      const taskIndex = tasks.findIndex(task => task.id === taskId)
      tasks.splice(taskIndex, 1)

      set({ tasks })
    },
    setDraggedTask(taskId) {
      set({ draggedTask: taskId })
    },
    moveTask(state) {
      const tasks = get().tasks.slice()
      const taskId = get().draggedTask
      const taskIndex = tasks.findIndex(task => task.id === taskId)
      tasks[taskIndex].state = state

      set({ tasks })
    }
  })
)