import { create } from 'zustand';
import { ITask, StateTypes } from '../types/task';
import { produce } from 'immer';

interface IState {
  tasks: ITask[]
  fixedTasks: number[]
  draggedTask: number | null
}

interface IMutations {
  addTask(task: ITask): void
  removeTask(taskId: number): void
  toggleFixedTask(taskId: number): void
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
    fixedTasks: [],
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
    toggleFixedTask(taskId) {
      const fixedTasks = get().fixedTasks.slice()
      const taskIndex = fixedTasks.indexOf(taskId)

      if (taskIndex === -1) {
        set({ fixedTasks: [...fixedTasks, taskId] })
        return
      }

      fixedTasks.splice(taskIndex, 1)
      set({ fixedTasks })
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