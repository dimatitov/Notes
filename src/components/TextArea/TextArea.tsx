import React from 'react'
import { TextAreaForm } from './TextArea.styled'

interface Props {
  placeholder: string
}

const TextArea: React.FC<Props> = ({ placeholder }) => {
  return <TextAreaForm placeholder={placeholder} />
}

export default TextArea
