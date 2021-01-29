import React from 'react'

import { Wrapper } from './NotesContainer.styled'
// interface ContentWrapperProps {}

const NotesContainer: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default NotesContainer
