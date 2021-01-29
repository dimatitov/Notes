import React from 'react'
import { Router } from '@reach/router'

import { ROUTES } from './constants/routes'

import Notes from './pages/Notes/Notes'

const App: React.FC = () => {
  return (
    <Router>
      <Notes path={ROUTES.NOTES_LIST.path} />
    </Router>
  )
}

export default App
