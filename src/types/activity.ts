import { TaskAction } from './task'

export interface IActivity {
  id: number
  content: string
  action: TaskAction
}