import React, { ReactNode } from 'react'

import { Wrapper, LabelInput } from './NoteInput.styled'

interface Props {
  inputForm: ReactNode
}

const NoteInput: React.FC<Props> = ({ children, inputForm }) => {
  return (
    <Wrapper>
      <LabelInput>{children}</LabelInput>
      {inputForm}
    </Wrapper>
  )
}

export default NoteInput
