export type StateTypes = 'PLANED' | 'PROGRESS' | 'COMPLETED'

export interface ITask {
  id: number
  title: string
  state: StateTypes
}
