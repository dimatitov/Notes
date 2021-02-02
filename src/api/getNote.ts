// import { notes } from '../mocks/notes'
import { INote } from '../models/note'

export const getNoteById = (
  id: number,
  notes: Array<INote>,
): Promise<{ status: number; note: INote }> => {
  return new Promise((resolve) => {
    const note = notes.find((item) => {
      return item.id == id
    })
    setTimeout(() => {
      resolve({ status: 200, note: note! })
    }, 100)
  })
}
