export type StateTypes = 'PLANNED' | 'DOING' | 'DONE' | 'ALL'
export type TaskAction = 'ADD' | 'FIX' | 'DELETE' | 'PROFILE'

export interface ITask {
  id: number
  title: string
  state: StateTypes
}
