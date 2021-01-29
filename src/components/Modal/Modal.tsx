import React from 'react'

import { ModalContainer, ModalTitle } from './Modal.styled'

interface Props {
  isModal: boolean
}

const Modal: React.FC<Props> = ({ isModal }) => {
  return (
    <ModalContainer isActive={isModal}>
      <ModalTitle>Добавить заметку</ModalTitle>
    </ModalContainer>
  )
}

export default Modal
