import React, { FC, useEffect, useState, useContext } from 'react'
import { RouteComponentProps, navigate, useParams } from '@reach/router'

import { getNoteById } from '../../api/getNote'
import { NotesContext } from '../../App'

import { INote } from '../../models/note'

import Header from '../../components/Header/Header'
import NotesContainer from '../../components/NotesContainer/NotesContainer'
import Top from '../../components/Top/Top'
import Button from '../../components/Button/Button'
import { Content, NoteText, NoteContent, NoteBottom, NoteDate } from './Note.styled'
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon'

import edit from '../../assets/img/editing.png'
import back from '../../assets/img/left_arrow.png'
import trash from '../../assets/img/delete.png'

const Note: FC<RouteComponentProps> = () => {
  const { noteId } = useParams()
  const [note, setNote] = useState<INote>({} as INote)
  const [isEdit, setIsEdit] = useState(false)
  const [textNote, setTextNote] = useState('')
  const { setNotes, notes } = useContext(NotesContext)

  useEffect(() => {
    setTextNote(note.text)
  }, [note])
  useEffect(() => {
    ;(async () => {
      if (notes) {
        const response = await getNoteById(noteId, notes)
        setNote(response.note)
      }
    })()
  }, [])
  const handleClickEditingNote = (): void => {
    setIsEdit(true)
  }
  const handleClickToSaveNote = (): void => {
    setIsEdit(false)
    if (setNotes) {
      setNotes((notes) => {
        return notes.map((note) => {
          return note.id == noteId ? { ...note, text: textNote } : note
        })
      })
    }
  }
  const handleClickToBack = (): void => {
    navigate('/')
  }
  const handleClickToDelete = (): void => {
    if (setNotes) {
      setNotes((notes) => {
        return notes.filter((note) => {
          return note.id != noteId
        })
      })
      navigate('/')
    }
  }

  return (
    <>
      <Content>
        <Header />
        <NotesContainer>
          <Top
            title={note.title}
            button={
              <Button
                title={isEdit ? 'Сохранить заметку' : 'Править заметку'}
                icon={edit}
                handleClick={isEdit ? handleClickToSaveNote : handleClickEditingNote}
              />
            }
            buttonToBack={true}
            buttonIcon={<ButtonIcon icon={back} handleClick={handleClickToBack} />}
          />
          <NoteContent>
            <NoteText
              minRows={5}
              maxRows={10}
              defaultValue={note.text}
              disabled={!isEdit}
              isEdit={isEdit}
              onChange={(e) => setTextNote(e.target.value)}
            />
            <NoteBottom>
              <NoteDate>{note.date}</NoteDate>
              <ButtonIcon handleClick={handleClickToDelete} icon={trash} />
            </NoteBottom>
          </NoteContent>
        </NotesContainer>
      </Content>
    </>
  )
}

export default Note
