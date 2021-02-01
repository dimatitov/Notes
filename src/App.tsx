import React, { useEffect, useState } from 'react'
import { Router } from '@reach/router'

import { ROUTES } from './constants/routes'

import Notes from './pages/Notes/Notes'
import Note from './pages/Note/Note'
import { INote } from './models/note'
import { getNotes } from './api/getNotes'

export const NotesContext = React.createContext<
  Partial<{
    setNotes: React.Dispatch<React.SetStateAction<INote[]>>
    notes: Array<INote>
  }>
>({})

const App: React.FC = () => {
  const [notes, setNotes] = useState<Array<INote>>([])
  useEffect(() => {
    ;(async () => {
      const response = await getNotes()
      setNotes(response.notes)
    })()
  }, [])
  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      <Router>
        <Notes path={ROUTES.NOTES_LIST.path} />
        <Note path={ROUTES.NOTE.path} />
      </Router>
    </NotesContext.Provider>
  )
}

export default App
