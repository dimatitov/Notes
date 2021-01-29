import React from 'react'
import { InputForm } from './Input.styled'

interface Props {
  placeholder: string
}

const Input: React.FC<Props> = ({ placeholder }) => {
  return <InputForm placeholder={placeholder} />
}

export default Input
