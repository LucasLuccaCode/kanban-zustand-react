export type StateTypes = 'PLANNED' | 'DOING' | 'DONE' | 'ALL'
export type TaskAction = 'ADD' | 'FIX' | 'DELETE' | 'UPDATE'

export interface ITask {
  id: number
  title: string
  state: StateTypes
}
