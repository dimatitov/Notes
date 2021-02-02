import React, { SetStateAction, useContext, useState } from 'react'

import {
  ModalContainer,
  ModalTitle,
  WrapperTextControlButton,
  WrapperButton,
  ButtonRightWrapper,
} from './Modal.styled'
import { NotesContext } from '../../App'

import ButtonIcon from '../ButtonIcon/ButtonIcon'
import NoteInput from '../NoteInput/NoteInput'
import Input from '../Input/Input'
import TextArea from '../TextArea/TextArea'
import Button from '../Button/Button'

import close from '../../assets/img/close.png'
import bold from '../../assets/img/bold.png'
import i from '../../assets/img/I.png'
import underline from '../../assets/img/underlined.png'
import numList from '../../assets/img/list_numbered.png'
import pointList from '../../assets/img/list_bulleted.png'
import replay from '../../assets/img/replay.svg'

interface Props {
  isModal: boolean
  handleClickCloseModal: () => void
  setStateText: React.Dispatch<SetStateAction<string>>
  setStateTitle: React.Dispatch<SetStateAction<string>>
  handleClick: () => void
}

const Modal: React.FC<Props> = ({
  isModal,
  handleClickCloseModal,
  handleClick,
  setStateText,
  setStateTitle,
}) => {
  return (
    <ModalContainer isActive={isModal}>
      <ButtonRightWrapper>
        <ButtonIcon icon={close} handleClick={handleClickCloseModal} />
      </ButtonRightWrapper>
      <ModalTitle>Добавить заметку</ModalTitle>
      <WrapperButton>
        <WrapperTextControlButton>
          <ButtonIcon icon={bold} />
          <ButtonIcon icon={i} />
          <ButtonIcon icon={underline} />
          <ButtonIcon icon={numList} />
          <ButtonIcon icon={pointList} />
        </WrapperTextControlButton>
        <ButtonIcon icon={replay} />
      </WrapperButton>
      <NoteInput
        inputForm={
          <Input
            placeholder={'Введите заголовок заметки'}
            handleChange={(e) => setStateTitle(e.currentTarget.value)}
          />
        }
      >
        Название заметки
      </NoteInput>
      <NoteInput
        inputForm={
          <TextArea
            placeholder={'Введите комментарий'}
            handleChange={(e) => {
              setStateText(e.currentTarget.value)
            }}
          />
        }
      >
        Комментарий
      </NoteInput>
      <Button title={'Добавить'} handleClick={handleClick} />
    </ModalContainer>
  )
}

export default Modal
