import React, { ReactNode } from 'react'
import { InputForm } from './Input.styled'

interface IInput {
  placeholder: string
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void
}

const Input: React.FC<IInput> = ({ placeholder, handleChange }) => {
  return <InputForm placeholder={placeholder} onChange={handleChange} />
}

export default Input
