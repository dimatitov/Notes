import { notes } from '../mocks/notes'
import { INote } from '../models/note'

export const getNotes = (): Promise<{ status: number; notes: Array<INote> }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 200, notes })
    }, 100)
  })
}
