import React, { FC, useState, useContext } from 'react'
import { RouteComponentProps } from '@reach/router'

import Header from '../../components/Header/Header'
import NotesContainer from '../../components/NotesContainer/NotesContainer'
import Top from '../../components/Top/Top'
import Button from '../../components/Button/Button'
import { Content, WrapperOpacity, NoteList } from './Notes.styled'
import Modal from '../../components/Modal/Modal'
import NoteItem from '../../components/NoteItem/NoteItem'
import { NotesContext } from '../../App'

import add from '../../assets/img/add.png'

const Notes: FC<RouteComponentProps> = () => {
  const { notes = [] } = useContext(NotesContext)
  const [isModal, setIsModal] = useState(false)
  const handleClickOpenModal = () => {
    setIsModal(true)
  }
  const handleClickCloseModal = () => {
    setIsModal(false)
  }

  return (
    <>
      <WrapperOpacity>
        <Content isActive={isModal}>
          <Header />
          <NotesContainer>
            <Top
              title={'Заголовок'}
              button={
                <Button title={'Добавить заметку'} icon={add} handleClick={handleClickOpenModal} />
              }
              buttonToBack={false}
            />
            <NoteList>
              {notes.map((note) => {
                return <NoteItem title={note.title} date={note.date} key={note.id} id={note.id} />
              })}
            </NoteList>
          </NotesContainer>
        </Content>
      </WrapperOpacity>
      <Modal isModal={isModal} handleClickCloseModal={handleClickCloseModal} />
    </>
  )
}

export default Notes
