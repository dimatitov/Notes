import React, { FC, useState, useContext } from 'react'
import { RouteComponentProps } from '@reach/router'
import moment from 'moment'
import 'moment/locale/ru'

import Header from '../../components/Header/Header'
import NotesContainer from '../../components/NotesContainer/NotesContainer'
import Top from '../../components/Top/Top'
import Button from '../../components/Button/Button'
import { Content, WrapperOpacity, NoteList } from './Notes.styled'
import Modal from '../../components/Modal/Modal'
import NoteItem from '../../components/NoteItem/NoteItem'
import { NotesContext } from '../../App'

import add from '../../assets/img/add.png'
import { INote } from '../../models/note'

const Notes: FC<RouteComponentProps> = () => {
  const { notes = [], setNotes } = useContext(NotesContext)
  const [isModal, setIsModal] = useState(false)
  const [noteTitle, setNoteTitle] = useState<string>('')
  const [noteText, setNoteText] = useState<string>('')
  moment.locale('ru')
  const handleClickOpenModal = () => {
    setIsModal(true)
  }
  const handleClickCloseModal = () => {
    setIsModal(false)
  }

  const handleClickToAddNote = () => {
    if (setNotes) {
      setNotes((notes) => {
        const newNote: INote = {
          id: Math.random() + Math.random(),
          title: noteTitle,
          date: moment().format('d MMMM YYYY'),
          text: noteText,
        }
        return notes.concat(newNote)
      })
      setIsModal(false)
    }
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
      <Modal
        isModal={isModal}
        handleClickCloseModal={handleClickCloseModal}
        setStateText={setNoteText}
        setStateTitle={setNoteTitle}
        handleClick={handleClickToAddNote}
      />
    </>
  )
}

export default Notes
