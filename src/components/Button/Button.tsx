import React from 'react'

import { DefaultButton, Icon } from './Button.styled'

interface ButtonProps {
  title: string
  icon?: string
  handleClick: () => void
}

const Button: React.FC<ButtonProps> = ({ title, icon, handleClick }) => {
  return (
    <DefaultButton onClick={handleClick}>
      <Icon src={icon} alt="icon" />
      {title}
    </DefaultButton>
  )
}

export default Button
