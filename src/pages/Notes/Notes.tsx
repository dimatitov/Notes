import React, { FC, useState } from 'react'
import { RouteComponentProps } from '@reach/router'

import Header from '../../components/Header/Header'
import NotesContainer from '../../components/NotesContainer/NotesContainer'
import Top from '../../components/Top/Top'
import Button from '../../components/Button/Button'
import { Content, WrapperOpacity } from './Notes.styled'

import add from '../../assets/img/add.png'
import Modal from '../../components/Modal/Modal'

const Notes: FC<RouteComponentProps> = () => {
  const [isModal, setIsModal] = useState(false)
  const handleClickAddNote = () => {
    setIsModal(!isModal)
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
                <Button title={'Добавить заметку'} icon={add} handleClick={handleClickAddNote} />
              }
            />
          </NotesContainer>
        </Content>
      </WrapperOpacity>
      <Modal isModal={isModal} />
    </>
  )
}

export default Notes
