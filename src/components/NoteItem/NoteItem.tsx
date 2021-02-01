import React, { ReactNode } from 'react'

import { NoteComponent, NoteTitle, Date } from './NoteItem.styled'

interface Props {
  title: string
  date: string
  id: number
  // handleClick: ReactNode
}

const NoteItem: React.FC<Props> = ({ title, date, id }) => {
  return (
    <NoteComponent to={`/note/${id}`}>
      <NoteTitle>{title}</NoteTitle>
      <Date>{date}</Date>
    </NoteComponent>
  )
}

export default NoteItem
