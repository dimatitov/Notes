import React from 'react'
import { TextAreaForm } from './TextArea.styled'

interface ITExtArea {
  placeholder: string
  handleChange: (e: React.FormEvent<HTMLTextAreaElement>) => void
}

const TextArea: React.FC<ITExtArea> = ({ placeholder, handleChange }) => {
  return <TextAreaForm placeholder={placeholder} onChange={handleChange} />
}

export default TextArea
