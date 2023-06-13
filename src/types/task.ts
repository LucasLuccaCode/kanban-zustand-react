export type StateTypes = 'PLANNED' | 'DOING' | 'DONE'

export interface ITask {
  id: number
  title: string
  state: StateTypes
}
