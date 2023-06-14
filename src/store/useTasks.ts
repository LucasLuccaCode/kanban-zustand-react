import { create } from 'zustand';
import { ITask, StateTypes } from '../types/task';
import { persist } from 'zustand/middleware';

interface IState {
  tasks: ITask[]
  filter: string
  fixedTasks: number[]
  draggedTask: number | null
}

interface IMutations {
  addTask(task: ITask): void
  setFilter(filter: string): void
  removeTask(taskId: number): void
  toggleFixedTask(taskId: number): void
  setDraggedTask(taskId: number): void
  moveTask(state: StateTypes): void
}

export const useTasksStore = create<IState & IMutations>()(
  persist(
    (set, get) => ({
      tasks: [],
      filter: '',
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
      setFilter(filter) {
        set({ filter })
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
    }), {
    name: 'mr-kanban'
  })
)